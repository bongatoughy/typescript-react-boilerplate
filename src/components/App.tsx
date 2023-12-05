//components/App.tsx

import React from "react";
import ResponsiveAppBar from "./AppBar";
import Login from "./Login";
import Landing from "./Landing";
import { UserContext, defaultUserContext } from "../context";

type AppProps = { num: number };

export const App = () => {
  const value = "My UserContext Value";
  return (
    <UserContext.Provider value={defaultUserContext}>
      <div>
        <ResponsiveAppBar />
        <Landing />
        <Login />
      </div>
    </UserContext.Provider>
  );
};
