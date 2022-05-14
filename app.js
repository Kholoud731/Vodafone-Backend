const express = require('express')

const app = express()
var jsonFile = require("./data.json");


app.get("/*", function(req, res, next) {

    res.json(jsonFile);

  });

app.listen(4000)