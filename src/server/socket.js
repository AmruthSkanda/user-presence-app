import socketIo from "socket.io";
import UserStore from "./utils/store";
const io = socketIo();

io.on('connection', (client) => {
  console.log("New client connected");
  io.emit('activeUsers', UserStore.getAll());

  client.on("disconnect", () => {
    io.emit('activeUsers', UserStore.getAll());
    console.log("Client disconnected");
  });
});

export default io;
