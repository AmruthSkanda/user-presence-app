"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.status = exports.SALT_WORK_FACTOR = exports.SESSION_TOKEN_SECRET = exports.ACCESS_TOKEN_SECRET = void 0;
var ACCESS_TOKEN_SECRET = "veNRnAWe6inFuo8o2u8SLLZLjolYDmDP7SzL0YfYI";
exports.ACCESS_TOKEN_SECRET = ACCESS_TOKEN_SECRET;
var SESSION_TOKEN_SECRET = "my-secret";
exports.SESSION_TOKEN_SECRET = SESSION_TOKEN_SECRET;
var SALT_WORK_FACTOR = 10;
exports.SALT_WORK_FACTOR = SALT_WORK_FACTOR;
var status = {
  UNAUTHORIZED: "UNAUTHORIZED",
  NOT_OK: "NOT_OK",
  NOT_FOUND: "NOT_FOUND",
  BAD_REQUEST: "BAD_REQUEST",
  OK: "OK",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR"
};
exports.status = status;