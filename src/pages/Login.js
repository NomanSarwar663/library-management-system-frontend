import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// components
import LoginForm from "../component/Login/LoginForm";

const Login = () => {
  return (
    <Box width="100%">
      <Container>
        <Box p="2%" display="flex" flexWrap="wrap" justifyContent="center">
          <Typography variant="h2" fontWeight="600">
            Library Management System
          </Typography>
          <Box mt="70px">
            <LoginForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
