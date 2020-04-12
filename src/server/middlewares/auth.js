import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, status } from "../utils/constants";

const authenticateJWT = (req, res, next) => {
  const authToken = req.cookies.auth;

  if (authToken) {
    jwt.verify(authToken, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: status.UNAUTHORIZED,
          message: "Invalid session! Please login again."
        });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      status: status.UNAUTHORIZED,
      message: "Missing auth! Please login again."
    });
  }
};

export default authenticateJWT;