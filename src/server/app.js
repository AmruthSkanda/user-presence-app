import express from "express";
import Path from 'path';
import http from "http";
import mongoose from "mongoose";
import { session, pages, users } from "./routes";
import socket from "./socket";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
console.log("ENV: ", process.env);
// import cors from "cors";
// import { corsOptions } from "./utils/cors";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/presense-db";
const port = process.env.PORT || 8989;
const wsPort = process.env.WEB_SCOKET_PORT || 8000;

//connect to mongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${MONGO_URI}`);
  }
});

//create express app
const app = express();

//apply middlewares
// app.use(cors(corsOptions));
app.use(express.static(Path.join(__dirname, "../src/client/build")));
app.use(bodyParser.json());
app.use(cookieParser());

//routes
app.use("/session", session);
app.use("/users", users);
app.use("/app*", pages);

//create and start server
const server = http
  .createServer(app)
  .listen(port, () => {
    const { address: host, port } = server.address();
    socket.listen(wsPort);
    console.log(`HTTP Server started running on ${host}:${port}`);
    console.log(`Web socket running on post: ${host}:${wsPort}`);
  });
