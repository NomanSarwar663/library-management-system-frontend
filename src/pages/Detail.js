import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// components
import BookDetail from "../component/Detail/BookDetail";

const Detail = () => {
  const bookData = {
    id: 1,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  };

  return (
    <Box width="100%">
      <Container>
        <Box
          p="2%"
          pb="3%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Typography variant="h4" fontWeight="600">
            Book Detail Page
          </Typography>
          <Box
            mt="30px"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BookDetail data={bookData} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Detail;
