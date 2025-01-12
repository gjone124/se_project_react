/* file added for Sprint 14 */
import { baseUrl } from "./constants.js";
import { handleServerResponse } from "./api.js";

// register new user (essentially create or sign up new user)
function registerUser({ email, password, username, avatarUrl }) {
  // remove '|| !avatarUrl' if no avatar is provided)"
  if (!email || !password || !username) {
    return Promise.reject("Missing required fields.");
  }

  return fetch(`${baseUrl}/signup`, {
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
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
}

export { registerUser, loginUser };
