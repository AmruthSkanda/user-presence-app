import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

import { ACCESS_TOKEN_SECRET, status } from "../utils/constants";
import { authMiddleware } from "../middlewares";
import UserStore from "../utils/store";
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(async user => {
      try {
        const isValid = await user.comparePassword(password);
        if (isValid) {
          UserStore.save(user);
          await user.updateOne({ lastVisited: Date.now() });
          const accessToken = jwt.sign({
            username: user.username,
            isAdmin: user.isAdmin,
            lastVisited: user.lastVisited
          }, ACCESS_TOKEN_SECRET, { expiresIn: "365d" });

          res.cookie("auth", accessToken, { httpOnly: true })
            .json({
              status: status.OK,
              message: "login successfull",
              data: { user }
            });
        } else {
          res.json({
            status: status.NOT_OK,
            message: "Password incorrect. Please try again!"
          });
        }
      } catch (err) {
        throw err;
      }
    })
    .catch((error) => res.status(400).json({
      status: status.NOT_FOUND,
      message: "Username not found",
      error
    }));
});

router.get("/logout", (req, res) => {
  const decoded = jwt.decode(req.cookies.auth) || {};
  UserStore.remove(decoded.username);

  res.clearCookie("auth")
    .json({
      status: status.OK,
      message: "Logout successful! Visit again!"
    })
});

router.get("/checkToken", authMiddleware, (req, res) => {
  res.json({
    status: status.OK,
    message: "Token is valid",
    data: { user: req.user }
  })
});

export default router;