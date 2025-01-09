/* file added for Sprint 14 */

import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  isLoggedIn: false,
});

export { CurrentUserContext };
