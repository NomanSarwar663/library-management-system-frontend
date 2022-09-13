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
      <Box sx={{ width: { xs: "95%", sm: "600px", md: "600px" } }}>
        <SignupForm />
      </Box>
    </Box>
  );
};

export default Signup;
