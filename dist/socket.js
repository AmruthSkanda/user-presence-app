"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _store = _interopRequireDefault(require("./utils/store"));

var io = (0, _socket["default"])();
io.on('connection', function (client) {
  console.log("New client connected");
  io.emit('activeUsers', _store["default"].getAll());
  client.on("disconnect", function () {
    io.emit('activeUsers', _store["default"].getAll());
    console.log("Client disconnected");
  });
});
var _default = io;
exports["default"] = _default;