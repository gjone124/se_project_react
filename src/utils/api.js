import { baseUrl, header } from "./constants.js";

export function getItems() {
  return fetch(`${baseUrl}/items`).then(handleServerResponse);
}

export function postItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
    headers: header,
  }).then(handleServerResponse);
}

export function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: header,
  }).then(handleServerResponse);
}

export function handleServerResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
}
