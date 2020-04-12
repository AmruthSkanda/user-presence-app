"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _constants = require("../utils/constants");

var UserSchema = new _mongoose["default"].Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    "default": false
  },
  createdOn: {
    type: Date,
    "default": Date.now
  },
  lastVisited: {
    type: Date
  }
});
UserSchema.pre("save", function (next) {
  var user = this; // only hash the password if it has been modified (or is new)

  if (!user.isModified('password')) return next(); // generate a salt

  _bcrypt["default"].genSalt(_constants.SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err); // hash the password using our new salt

    _bcrypt["default"].hash(user.password, salt, function (err, hash) {
      if (err) return next(err); // override the cleartext password with the hashed one

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(candidatePassword) {
    var isMatch;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _bcrypt["default"].compare(candidatePassword, this.password);

          case 3:
            isMatch = _context.sent;
            return _context.abrupt("return", isMatch);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = _mongoose["default"].model('User', UserSchema);

exports["default"] = _default;