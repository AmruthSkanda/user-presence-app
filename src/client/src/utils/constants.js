const env = process.env.NODE_ENV;

export const BASE_URL = env === "production" ? "" : "http://localhost:8989";

export const REGISTRATION_ERROR = "Unable to register :( Please contact system admin if issue persists.";
export const NO_MATCH_MSG = "Looking for the App? Login below to get started";
