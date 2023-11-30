import { createContext } from "react";
import { UserContext as UserContextType } from "./types";

export const defaultUserContext: UserContextType = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  username: "",
  setUsername: () => {},
};

export const UserContext = createContext(defaultUserContext);
