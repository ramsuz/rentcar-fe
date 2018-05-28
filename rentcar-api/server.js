var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var Promise = require("bluebird");

var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8333;

// ROUTING SETUP

var router = express.Router();

app.use(express.static("public"));

app.use(function(req, res, next) {
    req.getRoot = function() {
      return req.protocol + "://" + req.get('host');
    }
    return next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token, authorization"
  );

  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

require("./unsecured-routes")(router);

app.use("/api", router);

app.listen(port, () => {
	console.log("my-books server initialized. " + port);
	});

	