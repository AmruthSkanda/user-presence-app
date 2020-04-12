import express from "express";
import Path from 'path';
import http from "http";
import mongoose from "mongoose";
import { session, pages, users } from "./routes";
import socket from "./socket";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
// import cors from "cors";
// import { corsOptions } from "./utils/cors";

const port = process.env.PORT || 8989;
const wsPort = 8000;

//connect to mongoDB
const mongo_uri = "mongodb://localhost/presense-db";
mongoose.connect(mongo_uri, { useNewUrlParser: true }, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

//create express app
const app = express();

//apply middlewares
console.log("ENV: ", process.env.NODE_ENV)
// app.use(cors(corsOptions));
app.use(express.static(Path.join(__dirname, "../client/build")));
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
