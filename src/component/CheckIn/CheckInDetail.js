// propTypes
import PropTypes from "prop-types";
// react-router-dom
import { useParams, useNavigate } from "react-router-dom";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// API
import { PostBookCheckIn } from "../../Api";
// moment library
import moment from "moment";

const CheckInDetail = ({ issuedDetail }) => {
  const navigate = useNavigate();
  const { bookId } = useParams();

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
            <Typography variant="body2">{issuedDetail.issuer?.name}</Typography>
          </Stack>
          <Stack
            component="span"
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="space-between"
            spacing={2}
          >
            <Typography variant="body2" fontWeight="600">
              Mobile Number:
            </Typography>
            <Typography variant="body2">
              {issuedDetail.issuer?.phoneNo}
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
              {moment().format("MM/DD/YYYY")}
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
              {issuedDetail?.returnDate &&
                moment(issuedDetail.returnDate).format("MM/DD/YYYY")}
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
    </Box>
  );
};

CheckInDetail.propTypes = {
  issuedDetail: PropTypes.object.isRequired,
};

export default CheckInDetail;
