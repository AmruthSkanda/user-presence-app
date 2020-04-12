import openSocket from 'socket.io-client';
import { SOCKET_URL } from "./constants";

const Socket = (() => {
  let socket;

  const getSocket = () => socket;

  const create = () => {
    socket = openSocket(SOCKET_URL);
    return socket;
  };

  const disconnect = () => {
    return socket.disconnect();
  };

  return { getSocket, create, disconnect };
})();

export default Socket;

