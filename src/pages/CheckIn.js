import { useEffect, useState } from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// notistack
import { useSnackbar } from "notistack";
// mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// components
import CheckInDetail from "../component/CheckIn/CheckInDetail";
import CircularProgress from "@mui/material/CircularProgress";
// API
import { GetIssuedBookDetail } from "../Api";

const CheckIn = () => {
  const [issuedDetail, setIssuedDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { bookId } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const GetDetail = async (id) => {
      setIsLoading(true);
      try {
        const result = await GetIssuedBookDetail(id);

        if (result && result.data) {
          setIssuedDetail(result.data);
        } else {
          setIssuedDetail(null);
          enqueueSnackbar("Fetch detail failed!", { variant: "error" });
        }
      } catch (e) {
        setIssuedDetail(null);
        enqueueSnackbar("Error occured", { variant: "error" });
      }
      setIsLoading(false);
    };

    GetDetail(bookId);
  }, [bookId, enqueueSnackbar]);

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
              Check-in Details
            </Typography>

            <Box mt="30px" sx={{ width: "100%" }}>
              <CheckInDetail issuedDetail={issuedDetail} />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CheckIn;
