import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context";
import { ROUTES } from "../api-routes";

export default function Login() {
  const [usernameFieldValue, setUsernameFieldValue] = React.useState("");
  const [passwordFieldValue, setPasswordFieldValue] = React.useState("");
  const [responseMessage, setResponseMessage] = React.useState("");

  const onLogin = async () => {
    console.log(process.env.HOST);
    // const response = await axios.get(process.env.HOST);
    // console.log({ response });
    const base64Credentials = btoa(
      usernameFieldValue + ":" + passwordFieldValue
    );
    const authHeader = `Basic ${base64Credentials}`;

    // Axios request configuration
    const config = {
      headers: {
        Authorization: authHeader,
      },
    };

    // Make the API request
    const response = await axios.get(process.env.HOST + ROUTES.LOGIN, config);
    // console.log("Response:", response.data);
    console.log({ response });
  };

  const { isAuthenticated, setIsAuthenticated, username, setUsername } =
    useContext(UserContext);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="username"
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUsernameFieldValue(event.target.value);
        }}
        value={usernameFieldValue}
      />
      <TextField
        id="outlined-basic"
        label="passwordFieldValue"
        variant="outlined"
        type="passwordFieldValue"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPasswordFieldValue(event.target.value);
        }}
      />
      <Stack spacing={2} direction="row">
        <Button onClick={onLogin} variant="text">
          Submit
        </Button>
      </Stack>
      <div>
        {isAuthenticated && <h1>I am authenticated!</h1>}
        <h1>{username}</h1>
        <h2>{passwordFieldValue}</h2>
        <h1>{responseMessage}</h1>
      </div>
    </Box>
  );
}
