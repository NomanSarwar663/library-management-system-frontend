import * as React from "react";
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
  const [bookDetail, setBookDetail] = React.useState({});
  const { bookId } = useParams();
  console.log(bookId);

  const GetDetail = async () => {
    const result = await GetBookDetail(bookId);
    console.log(result.book);
    setBookDetail(result.data);
  };

  React.useEffect(() => {
    GetDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box width="100%">
      <Container>
        {Object.keys(bookDetail).length === 0 ? (
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
