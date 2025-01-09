/* file added for Sprint 14 */
import { baseUrl } from "./constants.js";
import { handleServerResponse } from "./api.js";

// register new user (essentially create or sign up new user)
function registerUser({ email, password, username, avatarUrl }) {
  // remove '|| !avatarUrl' if no avatar is provided)"
  if (!email || !password || !username || !avatarUrl) {
    return Promise.reject("Missing required fields.");
  }

  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      name: username,
      avatar: avatarUrl, //(comment out for no avatar scenario)
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

// checks the current user's token to make sure they are authorized
function getCurrentUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

//("change profile data")
function editUserProfile({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);
}

export { registerUser, loginUser, getCurrentUser, editUserProfile };
//("change profile data") => editUserProfile
