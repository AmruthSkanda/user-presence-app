"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _http = _interopRequireDefault(require("http"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = require("./routes");

var _socket = _interopRequireDefault(require("./socket"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _cors2 = require("./utils/cors");

var port = process.env.PORT || 8989;
var wsPort = 8000; //connect to mongoDB

var mongo_uri = "mongodb://localhost/presense-db";

_mongoose["default"].connect(mongo_uri, {
  useNewUrlParser: true
}, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Successfully connected to ".concat(mongo_uri));
  }
}); //create express app


var app = (0, _express["default"])(); //apply middlewares

console.log("ENV: ", process.env.NODE_ENV);

if (process.env.NODE_ENV === "dev") {}

app.use((0, _cors["default"])(_cors2.corsOptions));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../../client/build")));
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])()); //routes

app.use("/session", _routes.session);
app.use("/users", _routes.users);
app.use("/app*", _routes.pages); //create and start server

var server = _http["default"].createServer(app).listen(port, function () {
  var _server$address = server.address(),
      host = _server$address.address,
      port = _server$address.port;

  _socket["default"].listen(wsPort);

  console.log("HTTP Server started running on ".concat(host, ":").concat(port));
  console.log("Web socket running on post: ".concat(host, ":").concat(wsPort));
});