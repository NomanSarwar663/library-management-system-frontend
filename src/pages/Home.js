import { useEffect, useState } from "react";
// notistack
import { useSnackbar } from "notistack";
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
import { checkToken } from "../utils/jwt";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setbooks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const { userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const GetAllBooks_ = async () => {
      setIsLoading(true);
      try {
        const result = await GetAllBooks();

        if (result && result.data) {
          setbooks(result.data.books);
        } else {
          setbooks(null);
          enqueueSnackbar("Fetch books failed!", { variant: "error" });
        }
      } catch (error) {
        console.log("Error", error);
        const isValid = checkToken(error);
        if (!isValid) {
          navigate("/auth/login");
        }
        enqueueSnackbar("Error fetching Books!", { variant: "error" });
        setbooks(null);
      }
      setIsLoading(false);
    };
    GetAllBooks_();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box width="100%" height="100%">
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
          <>
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
              {books && (
                <Box sx={{ width: "100%", mt: "30px" }}>
                  <DataTable books={books} />
                </Box>
              )}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Home;
