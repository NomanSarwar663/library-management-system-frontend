import { useEffect, useState } from "react";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// components
import CheckOutDetail from "../component/CheckOut/CheckOutDetail";
import { CircularProgress, Stack } from "@mui/material";

const CheckOut = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Box width="100%" height="100vh">
      <Container>
        {isLoading ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
            <CircularProgress />
          </Stack>
        ) : (
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
              <CheckOutDetail />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CheckOut;
