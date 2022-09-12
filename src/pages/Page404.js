import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=740&t=st=1662977935~exp=1662978535~hmac=7d2589e41c365c7d1d5b9e6390e38c3b17f278f0984ea2744ecfc833b6399554)",
          width: "100%",
          height: "400px",
          backgroundSize: "contain",
          position: "relative",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          pt: 10,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          disableElevation
          onClick={() => navigate("/books")}
        >
          BACK TO MAIN
        </Button>
      </Box>
    </Box>
  );
};

export default Page404;
