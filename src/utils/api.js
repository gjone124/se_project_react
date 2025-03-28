import { BASE_URL } from "./constants.js";
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
  return fetch(`${BASE_URL}/items`).then(handleServerResponse);
}

// add new item (protected, requires token)
export function postItem({ name, imageUrl, weather }) {
  return fetch(`${BASE_URL}/items`, {
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
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
}

// change user's username and/or avatar
export function editUserProfile({ name, avatar }) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);
}

// like card (protected, requires token)
export function addCardLike(id) {
  return fetch(`${BASE_URL}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
}

// unlike card (protected, requires token)
export function removeCardLike(id) {
  return fetch(`${BASE_URL}/items/${id}/likes`, {
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
