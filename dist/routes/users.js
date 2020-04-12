"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("../models/User"));

var _middlewares = require("../middlewares");

var _constants = require("../utils/constants");

var router = _express["default"].Router();

router.put("/register-user", function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password,
      isAdmin = _req$body.isAdmin;
  var user = new _User["default"]({
    username: username,
    password: password,
    isAdmin: isAdmin
  });
  user.save().then(function (user) {
    res.status(200).json({
      status: "OK",
      message: "Registration Successful!",
      data: {
        user: user
      }
    });
  })["catch"](function (err) {
    if (err.errmsg.includes("duplicate key error")) {
      res.status(400).json({
        status: _constants.status.NOT_OK,
        message: "User already exists! Please try another username"
      });
    } else {
      res.status(400).json({
        status: _constants.status.INTERNAL_SERVER_ERROR,
        message: "Error registering new user please try again.",
        error: err
      });
    }
  });
});
router.get("/history", _middlewares.authMiddleware, function (req, res) {
  _User["default"].find({}).then(function (users) {
    res.json({
      status: "OK",
      data: users
    });
  })["catch"](function (error) {
    return res.status(400).json({
      status: "NOT_OK",
      message: "Something went wrong!",
      error: error
    });
  });
});
var _default = router;
exports["default"] = _default;