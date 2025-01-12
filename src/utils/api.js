import { baseUrl } from "./constants.js";
//const token = localStorage.getItem("jwt");

// const token (from above) could be a stale value if a user logs out (not good)

// using const token from above meant that when you log out
// & log into a different user that the new user's token may reference
// token used by the previous user (which it shouldn't)

// getToken ensures that token is not stale by calling it at that moment
export const getToken = () => {
  return localStorage.getItem("jwt");
};

// get all items
export function getItems() {
  return fetch(`${baseUrl}/items`).then(handleServerResponse);
}

// add new item (protected, requires token)
export function postItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
}

// delete item (protected, requires token)
export function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
}

// checks the current user's token to make sure they are authorized (Sprint 14)
export function getCurrentUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

// change user's username and/or avatar ("change profile data") (Sprint 14)
export function editUserProfile({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);
}

// added for Sprint 14 ("like functionality")
// like card (protected, requires token)
export function addCardLike(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
}

// added for Sprint 14 ("like functionality")
// unlike card (protected, requires token)
export function removeCardLike(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
}

export function handleServerResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
}
