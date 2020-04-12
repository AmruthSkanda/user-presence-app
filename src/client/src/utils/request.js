import axios from "axios";
import { BASE_URL } from "./constants";

const defaultHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};
const iAxios = axios.create({
  baseURL: BASE_URL,
  headers: defaultHeaders
});

iAxios.interceptors.request.use((config) => {
  // console.info(`Request::\n${new Date()} :: `, config);
  return config;
}, function (error) {
  console.info(`Request ERROR::\n${new Date()} :: `, error);
  return Promise.reject(error);
});

iAxios.interceptors.response.use(function (response) {
  // console.info(`Response::\n${new Date()} :: `, response);
  return response;
}, function (error) {
  console.info(`Response ERROR::\n${new Date()} :: `, error);
  return Promise.reject(error);
});

const myFetch = (url, options) => {
  return iAxios({
    url,
    ...options,
    withCredentials: true,
    headers: { ...defaultHeaders }
  });
};

export default myFetch;
