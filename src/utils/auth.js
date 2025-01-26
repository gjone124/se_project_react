import { BASE_URL } from "./constants.js";
import { handleServerResponse } from "./api.js";

// register new user (essentially create or sign up new user)
function registerUser({ email, password, username, avatarUrl }) {
  // remove '|| !avatarUrl' if no avatar is provided)"
  if (!email || !password || !username) {
    return Promise.reject("Missing required fields.");
  }

  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      name: username,
      avatar: avatarUrl,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
}

// login (or sign in) existing user
function loginUser({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
}

// checks the current user's token to make sure they are authorized
function verifyUserByCheckingToken() {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
}

export { registerUser, loginUser, verifyUserByCheckingToken };
