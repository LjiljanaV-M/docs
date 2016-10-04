let express = require('express');
let bodyParser = require('body-parser');
var build = require('./metalsmith.js').build;
let app = express();

app.use(bodyParser.json());

app.post('/hook', (req, res) => {
  if (req.body.ref === "refs/heads/master") {
    console.log("Build started..");
    build();
  }

  res.status(200).end();
});

app.listen('8080');
