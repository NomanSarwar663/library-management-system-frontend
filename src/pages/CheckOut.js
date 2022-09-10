import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CheckOutDetail from "../component/CheckOut/CheckOutDetail";
import { useParams } from "react-router-dom";

// components

const CheckOut = () => {
  const { bookId } = useParams();
  return (
    <Box width="100%" height="100vh">
      <Container>
        <Box
          p="2%"
          pb="3%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Typography variant="h4" fontWeight="600">
            Check-out Form
          </Typography>
          <Box mt="30px" sx={{ width: "100%" }}>
            <CheckOutDetail data={{}} bookId={bookId} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CheckOut;
