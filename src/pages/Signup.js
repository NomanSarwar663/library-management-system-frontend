import * as React from "react";
// mui
import Box from "@mui/material/Box";
// components
import SignupForm from "../component/Signup/SignupForm";

const Signup = () => {
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
      <SignupForm />
    </Box>
  );
};

export default Signup;
