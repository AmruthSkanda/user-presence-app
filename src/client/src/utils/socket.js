import openSocket from 'socket.io-client';
import { BASE_URL } from "./constants";

const Socket = (() => {
  let socket;

  const getSocket = () => socket;

  const create = () => {
    socket = openSocket(BASE_URL);
    return socket;
  };

  const disconnect = () => {
    return socket.disconnect();
  };

  return { getSocket, create, disconnect };
})();

export default Socket;

