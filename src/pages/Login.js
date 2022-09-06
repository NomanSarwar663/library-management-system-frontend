import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// components
import LoginForm from "../component/Login/LoginForm";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        my: "auto 0",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
