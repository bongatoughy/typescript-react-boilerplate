export interface UserContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;

  username: string;
  setUsername: (newUsername: string) => void;
}
