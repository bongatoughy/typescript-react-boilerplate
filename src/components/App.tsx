//components/App.tsx

import React from "react";
import ResponsiveAppBar from "./AppBar";
import Login from "./Login";
import Landing from "./Landing";

type AppProps = { num: number };

export const App = ({ num }: AppProps) => (
  <div>
    <h1>Total Number: {num}</h1>
    <Landing />
    <Login />
    <ResponsiveAppBar />
  </div>
);
