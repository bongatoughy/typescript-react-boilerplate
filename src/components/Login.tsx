import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [responseMessage, setResponseMessage] = React.useState("");

  const onLogin = async () => {
    console.log(process.env.HOST);
    const response = await axios.get(process.env.HOST);
    console.log({ response });
    setResponseMessage(response.data);
  };

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
          setUsername(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />
      <Stack spacing={2} direction="row">
        <Button onClick={onLogin} variant="text">
          Submit
        </Button>
      </Stack>
      <div>
        <h1>{username}</h1>
        <h2>{password}</h2>
        <h1>{responseMessage}</h1>
      </div>
    </Box>
  );
}
