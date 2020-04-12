"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _constants = require("../utils/constants");

var authenticateJWT = function authenticateJWT(req, res, next) {
  var authToken = req.cookies.auth;

  if (authToken) {
    _jsonwebtoken["default"].verify(authToken, _constants.ACCESS_TOKEN_SECRET, function (err, user) {
      if (err) {
        return res.status(403).json({
          status: _constants.status.UNAUTHORIZED,
          message: "Invalid session! Please login again."
        });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      status: _constants.status.UNAUTHORIZED,
      message: "Missing auth! Please login again."
    });
  }
};

var _default = authenticateJWT;
exports["default"] = _default;