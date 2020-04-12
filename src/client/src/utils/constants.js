const env = process.env.NODE_ENV;
console.log("ENV: ", env);

export const BASE_URL = env === "production" ? "" : "http://localhost:8989";
export const SOCKET_URL = "http://localhost:8000";

export const REGISTRATION_ERROR = "Unable to register :( Please contact system admin if issue persists.";
