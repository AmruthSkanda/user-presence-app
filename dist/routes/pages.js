"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var router = _express["default"].Router();

router.get("/", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../../../client/build', 'index.html'));
});
var _default = router;
exports["default"] = _default;