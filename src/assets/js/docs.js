/* eslint-env browser */
/* global jQuery, lunr, Handlebars, prettyPrint */
/*!

Documentation middleware.
Created by Zach Supalla.
(c) 2016 Particle Industries, Inc. MIT licensed.

*/

(function($) {
  var exports = this;

  /**
   * Basic Docs module.
   */

  var Docs = exports.Docs = {};

  Docs.transform = function() {
    this.tagImages();
    this.prettifyCode();
  };

  /**
   * Tags paragraphs that include images.
   */

  Docs.tagImages = function() {
    $('.content').find('p:has(img)').each(function() {
      var $el = $(this);
      $el.addClass('img');
    });
  };

  /**
   * Make code prettier
   */

  Docs.prettifyCode = function() {
    $('.content').find('pre code').each(function() {
      $(this).addClass('prettyprint');
    });
  };


  Docs.rememberDevices = function() {
    if (typeof Storage !== 'undefined') {
      var currentPath = window.location.pathname;
      if (currentPath.indexOf('photon') > -1) {
        localStorage.setItem('lastDevice', 'photon');
      } else if (currentPath.indexOf('core') > -1) {
        localStorage.setItem('lastDevice', 'core');
      } else if (currentPath.indexOf('electron') > -1) {
        localStorage.setItem('lastDevice', 'electron');
      }
    }
  };

  /**
   * Synchronize table of contents with page scroll position
   */

  Docs.setupTOCScrollSpy = function() {
    var content = $('.content-inner');
    var headers = content.find('h2, h3');

    if (headers.length === 0) {
      return;
    }

    var twoLevelTOC = content.find('h2').length > 0;
    var currentHeader = -1;

    // When scrolling, find the closest header and synchronize which TOC
    // entry is active
    content.on('scroll', function() {
      var scrollPosition = content.scrollTop();
      var done = false;

      var oldHeader = currentHeader;
      while (!done) {
        if (currentHeader < headers.length - 2 &&
           scrollPosition >= Math.floor($(headers[currentHeader + 1]).position().top)) {
          currentHeader += 1;
        } else if (currentHeader > 0 &&
                  scrollPosition < Math.floor($(headers[currentHeader]).position().top)) {
          currentHeader -= 1;
        } else {
          done = true;
        }
      }

      if (oldHeader !== currentHeader) {
        Docs.updateTOC($(headers[currentHeader]), twoLevelTOC);
      }
    });
  };

  Docs.updateTOC = function($currentHeader, twoLevelTOC) {
    var elementId = $currentHeader.attr('id');

    if ($currentHeader.prop('tagName') === 'H3') {
      Docs.updateTOCforH3(elementId, twoLevelTOC);
    } else {
      Docs.updateTOCforH2(elementId);
    }

    Docs.expandInPageTOC();
  };

  Docs.updateTOCforH2 = function(elementId) {
    // This is the menu li that corresponds to the h2 that was scrolled to
    var $correspondingNavElement = $('ul.in-page-toc li[data-nav] a[href="#'+ elementId+'"]').parent('li');
    Docs.expandPrimaryTOC($correspondingNavElement);
  };

  Docs.expandPrimaryTOC = function($correspondingNavElement) {
    // Remove active class
    $('ul.in-page-toc li[data-nav]').removeClass('active')
       // Show the secondary nav as collapsed
      .find('.toggle-secondary-toc').removeClass('ion-arrow-down-b').addClass('ion-arrow-right-b');
    // Make the current nav element active
    $correspondingNavElement.addClass('active')
       // Show the secondary nav as expanded
      .find('.toggle-secondary-toc').removeClass('ion-arrow-right-b').addClass(' ion-arrow-down-b');

    // Hide all the other secondary in page tocs
    $('ul.secondary-in-page-toc').hide()
        // Make all secondary pages inactive
        .find('li').removeClass('active');

    // Show the secondary in page toc for this section
    var $secondaryNav = $correspondingNavElement.next('.secondary-in-page-toc');
    if ($secondaryNav.length > 0) {
      $secondaryNav.show();
    }
  };

  Docs.updateTOCforH3 = function(elementId, twoLevelTOC) {
    var dataSelector = twoLevelTOC ? 'data-secondary-nav' : 'data-nav';
    // This is the menu li that corresponds to the h3 that was scrolled to
    var $correspondingNavElement = $('li['+dataSelector+'] a[href="#'+elementId+ '"]').parent('li');

    if (twoLevelTOC) {
      // Make sure primary section is visible
      var $parentli = $correspondingNavElement.parent().prev('li[data-nav]');
      if (!$parentli.hasClass('active')) {
        Docs.expandPrimaryTOC($parentli);
      }
    }

    // Remove active class
    $('li['+dataSelector+']').removeClass('active');
    // Make the current nav element active
    $correspondingNavElement.addClass('active');
  };

  Docs.expandInPageTOC = function() {
    var inPageTOC = $('ul.in-page-toc');
    var isExpanded = Docs.inPageTOCExpanded || inPageTOC.hasClass('show');
    var isGuide = window.location.pathname.indexOf('/guide/') > -1;
    if (!isExpanded && !isGuide) {
      $('li.active').click();
      Docs.inPageTOCExpanded = true;
    }
  };

  Docs.scrollToElement = function(element) {
    var $element = $(element);
    if ($element.length === 1) {
      var position = $element.position().top + 10;
      $('.content-inner').scrollTop(position);
    }
  };

  Docs.scrollToInternalLinks = function() {
    var $internalLinks = $('.menubar a[href^="#"], a.header-permalinks');
    $internalLinks.click(function() {
      var href = $(this).attr('href');
      if (window.history) {
        history.pushState({hash: href}, 'New Hash', href);
      }
    });

    window.onpopstate = function(e) {
      if (e.state && e.state.hash) {
        Docs.scrollToElement(e.state.hash);
      }
    };
  };

  Docs.inPageTOCExpanded = false;

  Docs.watchToggleInPageNav = function() {
    $('li.top-level.active').click(function() {
      $('ul.in-page-toc').toggleClass('show hide');
      $(this).find('#toggle-in-page-nav').toggleClass('ion-plus ion-minus');
    });
  };

  Docs.watchToggleSecondaryInPageNav = function() {
    $('.toggle-secondary-toc').click(function() {
      var $this = $(this);
      var $parent = $this.parent();
      if ($this.hasClass('ion-arrow-down-b')) {
        $this.removeClass('ion-arrow-down-b').addClass('ion-arrow-right-b');
        $parent.next('.secondary-in-page-toc').hide();
      } else {
        $this.removeClass('ion-arrow-right-b').addClass('ion-arrow-down-b');
        $parent.next('.secondary-in-page-toc').show();
      }
    });
  };

  Docs.titleize = function(string) {
    var stringNoDashes = string.replace(/-/g, ' ');
    var stringToTitleCase = stringNoDashes.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    return stringToTitleCase;
  };

  Docs.buildSearchResults = function(results, store) {
    var fiveResults = results.slice(0,5);

    var niceResults = fiveResults.map(function(r) {
      var resultInfo = store[r.ref];
      var nr = {};
      nr.link = r.ref;
      nr.title = resultInfo.title;
      nr.device = resultInfo.device;
      nr.collection = Docs.titleize(resultInfo.collection);
      nr.pageTitle = resultInfo.pageTitle;
      nr.collectionClass = resultInfo.collection;
      return nr;
    });

    var html = Handlebars.templates.search({results: niceResults});
    $('.search-results').append(html);
  };

  Docs.toggleShowing = function() {
    $('span.popupLink, span.footnoteLink').on('click', function() {
      $(this).toggleClass('showing');
    });
  };

  Docs.toggleNav = function() {
    var $root = $(".content-root");
    $('.toggle-navigation').click(function(e) {
      e.preventDefault();
      toggleNav();
      updateBackdrop();
      toggleIcon(this, $root.hasClass('menubar-show'));
    });

    $root.on('click', '.menubar-backdrop', function(e) {
      e.preventDefault();
      closeNav();
      updateBackdrop();
    });

    function toggleIcon(el, isOpen) {
      if (isOpen) {
        $('i', el).removeClass('ion-navicon');
        $('i', el).addClass('ion-android-close');
      } else {
        $('i', el).addClass('ion-navicon');
        $('i', el).removeClass('ion-android-close');
      }
    }

    function toggleNav() {
      $root.toggleClass('menubar-show');
    }

    function closeNav() {
      $root.removeClass('menubar-show');
    }

    function updateBackdrop() {
      if($root.hasClass('menubar-show')) {
        $root.prepend('<div class="menubar-backdrop"></div>');
      } else {
        $('.menubar-backdrop').remove();
      }
    }
  };

  // Ok, then let's do it!
//  Docs.rememberDevices();
  Docs.transform();
  Docs.setupTOCScrollSpy();
  Docs.scrollToInternalLinks();
  Docs.watchToggleInPageNav();
  Docs.watchToggleSecondaryInPageNav();
  Docs.toggleNav();
  Docs.toggleShowing();
  prettyPrint();
})(jQuery);
