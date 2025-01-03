/* file added for Sprint 14 */
import { baseUrl, header } from "./constants.js";
import { handleServerResponse } from "./api";

/* this method is called when you click on the registration submit button */
export function registerUser({ email, password, username, avatarUrl }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      name: username,
      avatar: avatarUrl,
    }),
    headers: header,
  }).then(handleServerResponse);
}
