import express from "express";
import Path from 'path';
import http from "http";
import mongoose from "mongoose";
import socketIo from "socket.io";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { session, pages, users } from "./routes";
import UserStore from "./utils/store";
// import cors from "cors";
// import { corsOptions } from "./utils/cors";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/presense-db";
const port = process.env.PORT || 8989;

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

//create server
const server = http.createServer(app);

//create socket
const io = socketIo(server);

io.on('connection', (client) => {
  console.log("New client connected: ", client.id);
  io.emit('activeUsers', UserStore.getAll());

  client.on("disconnect", () => {
    io.emit('activeUsers', UserStore.getAll());
    console.log("Client disconnected", client.id);
  });
});

//start server
server.listen(port, () => {
  const { address: host, port } = server.address();
  console.log(`HTTP Server started running on ${host}:${port}`);
});
