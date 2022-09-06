import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// components
import DataTable from "../component/Home/DataTable";

const Home = () => {
  return (
    <Box width="100%" sx={{ backgroundColor: "#efefef" }}>
      <Container>
        <Box
          p="2%"
          pb="3%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Typography variant="h4" fontWeight="600">
            Books
          </Typography>
          <Box mt="30px" sx={{ width: "100%" }}>
            <DataTable />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
