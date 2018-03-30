const express = require('express');
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
const path = require('path');

var config = require("./server-config");


const port = process.env.PORT || 8080;


var app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname,config.module_default.modules_path)));
//console.log('==> ',config.mod.service.getModuleConfigDir('hotels'));


routes(app);

var server = app.listen(port, function () {
  console.log("app running on port.", server.address().port);
  //console.log(config);
});