import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// components
import DataTable from "../component/Home/DataTable";
import { GetAllBooks } from "../Api";
import { Stack } from "@mui/system";
import { CircularProgress } from "@mui/material";
import useAuth from "../Hooks/useAuth";

const Home = () => {
  const [books, setbooks] = React.useState([]);

  const getBookHandler = async () => {
    const result = await GetAllBooks();
    setbooks(result.books);
  };
  React.useEffect(() => {
    getBookHandler();
  }, []);

  const { userData } = useAuth();

  return (
    <Box
      width="100%"
      height="100%"
      sx={{ backgroundColor: "#efefef", height: "100%" }}
    >
      <Container sx={{ backgroundColor: "#efefef", height: "100%" }}>
        <Stack alignItems={{ xs: "center", md: "flex-end" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              backgroundColor: "#007fff1f",
              p: 2,
              mt: 2,
              mr: { xs: 0, md: 3 },
              borderRadius: 3,
            }}
          >
            <Avatar sx={{ bgcolor: "#0072E5" }}>
              {userData.firstName[0] + userData.lastName[0]}
            </Avatar>
            <Stack>
              <Typography variant="subtitle1" fontWeight="600">
                {userData.firstName} {userData.lastName}
              </Typography>
              <Typography variant="body2">Librarian</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            p: "2%",
            pb: "3%",
          }}
        >
          <Typography variant="h4" fontWeight="600" textAlign="center">
            Books
          </Typography>
          <Box sx={{ width: "100%", height: "100%", mt: "30px" }}>
            {books.length > 0 ? (
              <DataTable books={books} />
            ) : (
              <Stack alignItems="center">
                <CircularProgress />
              </Stack>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
