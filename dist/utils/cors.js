"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsOptions = void 0;
var whitelist = ['http://localhost:8989', 'http://localhost:3000'];
var corsOptions = {
  origin: function origin(_origin, callback) {
    console.log("Origin: ", _origin);

    if (whitelist.indexOf(_origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};
exports.corsOptions = corsOptions;