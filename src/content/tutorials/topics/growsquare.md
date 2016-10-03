---
title: GrowSquare v1.0 CAD Tutorial
template: tutorials.hbs
columns: two
order: 8
---

## Introduction - The GrowSquare v1.0
The GrowSquare is a raised planter bed that can be used for above-ground planting, where high-quality soil is rare. It's a convenient way to start your produce growing in an easy, elegant way. During this tutorial series, we'll show you how to model the GrowSquare v1.0 in SolidWorks.

<div class="sketchfab-embed-wrapper"><iframe width="640" height="480" src="https://sketchfab.com/models/e8a5c06742e747138760b5c33ea7c800/embed" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
</div>

For more information, follow these links:

1. Review the AKER GrowSquare v1.0 on the AKER Forum
2. Buy an AKER GrowSquare v1.0 at the AKER Store
3. Contact the AKER team


## Base Sketch
In this section, we will create a new part and draw its base sketch.

{{{youtube "https://www.youtube.com/embed/aSChDqinm_E" }}}

1. Create a new part called "Part A"
2. Connect your external equations file: Tools > Equations... > Import > (Your_Equations_File.txt) > Ok
3. Select the Top Plane and begin a new sketch
4. Sketch a Center Rectangle beginning at the origin
5. Use the Smart Dimension tool to make the rectangle 1000 mm long and 150 mm wide
6. In the Features tab, select the Extruded Box/Base command
7. Use the "SheetHeight" variable for the extrude height and enter the command
8. Name your base sketch "Sketch - Base"
9. Name your extrusion "Extrude - Base"

## Dogbones
In this section, we will create a the dogbone joints for Part A.

{{{youtube "https://www.youtube.com/embed/eJD_bhStr9E" }}}

1. Select the top face of Part A and begin a new sketch
2. Sketch a rectangle from the middle of the part to the bottom sketch line
3. Select the rectangle and convert it to Construction Geometry
4. (Dogbone sketch method here)
5. Mirror the dogbones
6. Extrude/Cut the dogbones
7. Name your base sketch "Sketch - Dogbones"
8. Name your extrusion "Cut - Dogbones"

## Fillets
In this section, we will create the corner fillets for Part A.

{{{youtube "https://www.youtube.com/embed/v7yBIRVZncM"}}}

1. Select a corner
2. Select the Fillets command
3. Select each corner of the part
4. Enter the command
5. Name your feature "Fillets" in the feature tree

## Assembly
In this section, we will assemble the GrowSquare v1.0.

{{{youtube "https://www.youtube.com/embed/K4ElMpqe1JI" }}}

1. Create a new assembly called "GrowSquare - v1.0 - 3D Assembly"
2. Insert Part A
3. Mate the bottom surface of Part A to the top surface...
4. (To do later..)
