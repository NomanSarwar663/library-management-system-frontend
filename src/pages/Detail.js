import { useEffect, useState } from "react";
// notistack
import { useSnackbar } from "notistack";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// components
import BookDetail from "../component/Detail/BookDetail";
import { useParams } from "react-router-dom";
import { GetBookDetail } from "../Api";
import { CircularProgress, Stack } from "@mui/material";

const Detail = () => {
  const [bookDetail, setBookDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { bookId } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const GetDetail = async (id) => {
      setIsLoading(true);
      try {
        const result = await GetBookDetail(id);

        if (result && result.data) {
          setBookDetail(result.data);
        } else {
          setBookDetail(null);
          enqueueSnackbar("Fetch detail failed!", { variant: "error" });
        }
      } catch (error) {
        console.log("Error", error);
        enqueueSnackbar("Error occured!", { variant: "error" });
        setBookDetail(null);
      }
      setIsLoading(false);
    };

    GetDetail(bookId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  return (
    <Box width="100%">
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
              <BookDetail data={bookDetail} />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Detail;
