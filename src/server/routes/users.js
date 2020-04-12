import express from "express";
import User from "../models/User";
import { authMiddleware } from "../middlewares";
import { status } from "../utils/constants";
const router = express.Router();

router.put("/register-user", (req, res) => {
  const { username, password, isAdmin } = req.body;

  const user = new User({ username, password, isAdmin });
  user.save()
    .then((user) => {
      res.status(200).json({
        status: "OK",
        message: "Registration Successful!",
        data: { user }
      });
    })
    .catch(err => {
      if (err.errmsg.includes("duplicate key error")) {
        res.status(400).json({
          status: status.NOT_OK,
          message: "User already exists! Please try another username"
        })
      } else {
        res.status(400).json({
          status: status.INTERNAL_SERVER_ERROR,
          message: "Error registering new user please try again.",
          error: err
        });
      }
    });
});

router.get("/history", authMiddleware, (req, res) => {
  User.find({})
    .then(users => {
      const data = users.map(({ isAdmin, username, createdOn, lastVisited }) => ({
        isAdmin,
        username,
        createdOn,
        lastVisited
      }));
      res.json({ status: "OK", data });
    })
    .catch((error) => res.status(400).json({
      status: "NOT_OK",
      message: "Something went wrong!",
      error
    }));
});

export default router;