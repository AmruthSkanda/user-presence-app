"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User"));

var _constants = require("../utils/constants");

var _middlewares = require("../middlewares");

var _store = _interopRequireDefault(require("../utils/store"));

var router = _express["default"].Router();

router.post("/login", function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  _User["default"].findOne({
    username: username
  }).then( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
      var isValid, accessToken;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return user.comparePassword(password);

            case 3:
              isValid = _context.sent;

              if (!isValid) {
                _context.next = 12;
                break;
              }

              _context.next = 7;
              return user.updateOne({
                lastVisited: Date.now()
              });

            case 7:
              accessToken = _jsonwebtoken["default"].sign({
                username: user.username
              }, _constants.ACCESS_TOKEN_SECRET, {
                expiresIn: "365d"
              });

              _store["default"].save(user);

              res.cookie("auth", accessToken, {
                httpOnly: true
              }).json({
                status: _constants.status.OK,
                message: "login successfull",
                data: {
                  user: user
                }
              });
              _context.next = 13;
              break;

            case 12:
              res.json({
                status: _constants.status.NOT_OK,
                message: "Password incorrect. Please try again!"
              });

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }())["catch"](function (error) {
    return res.status(400).json({
      status: _constants.status.NOT_FOUND,
      message: "Username not found",
      error: error
    });
  });
});
router.get("/logout", function (req, res) {
  var decoded = _jsonwebtoken["default"].decode(req.cookies.auth) || {};

  _store["default"].remove(decoded.username);

  res.clearCookie("auth").json({
    status: _constants.status.OK,
    message: "Logout successful! Visit again!"
  });
});
router.get("/checkToken", _middlewares.authMiddleware, function (req, res) {
  res.json({
    status: _constants.status.OK,
    message: "Token is valid"
  });
});
var _default = router;
exports["default"] = _default;