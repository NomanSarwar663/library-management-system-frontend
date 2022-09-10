import * as React from "react";
// propTypes
import PropTypes from "prop-types";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { GetBookDetail, PostBookCheckIn } from "../../Api";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import moment from "moment";

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

const CheckInDetail = () => {
  const [book, setBook] = React.useState({});
  const { bookId } = useParams();
  const navigate = useNavigate();

  const GetDetail = async () => {
    const result = await GetBookDetail(bookId);
    setBook(result.book);
  };

  React.useEffect(() => {
    GetDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkInHandler = async () => {
    const result = await PostBookCheckIn(bookId);
    if (result && result.status === "Success") {
      navigate("/books");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Object.keys(book).length === 0 ? (
        <Stack>
          <CircularProgress />
        </Stack>
      ) : (
        <Box
          width={{ xs: "90%", md: "30%" }}
          sx={{ boxShadow: 3, p: 4, borderRadius: 3 }}
        >
          <Stack alignItems="center" justifyContent="center">
            <Box
              sx={{
                width: "150px",
                height: "200px",
                backgroundImage:
                  "url(https://thumbs.dreamstime.com/b/fairy-tale-story-book-isolated-fairy-tale-story-book-fairytale-storybook-reading-fun-good-entertainment-isolated-211096177.jpg)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50% ",
              }}
            ></Box>
          </Stack>
          <Stack alignItems="center" spacing={1} sx={{ mt: 2 }}>
            <Stack
              component="span"
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Typography variant="body2" fontWeight="600">
                Issuer Name:
              </Typography>
              <Typography variant="body2">
                {book.issuedDetails?.issuer?.name}
              </Typography>
            </Stack>
            <Stack
              component="span"
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Typography variant="body2" fontWeight="600">
                Mobile Nummber:
              </Typography>
              <Typography variant="body2">
                {book.issuedDetails?.issuer?.phoneNo}
              </Typography>
            </Stack>
            <Stack
              component="span"
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Typography variant="body2" fontWeight="600">
                Actual Return Day:
              </Typography>
              <Typography variant="body2">
                {convertDate(moment().format())}
              </Typography>
            </Stack>
            <Stack
              component="span"
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Typography variant="body2" fontWeight="600">
                Required Return Day:
              </Typography>
              <Typography variant="body2">
                {book?.issuedDetails?.returnDate &&
                  convertDate(book.issuedDetails.returnDate)}
              </Typography>
            </Stack>
            <Stack
              component="span"
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Typography variant="body2" fontWeight="600">
                Penalty (if any):
              </Typography>
              <Typography variant="body2">0 Pkr</Typography>
            </Stack>
          </Stack>
          <Stack sx={{ marginTop: "20px" }}>
            <Button variant="outlined" onClick={checkInHandler}>
              Check-in
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

CheckInDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CheckInDetail;
