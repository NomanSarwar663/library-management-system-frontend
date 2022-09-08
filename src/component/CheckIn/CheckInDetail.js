import * as React from "react";
// propTypes
import PropTypes from "prop-types";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CheckInDetail = () => {
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
        <Stack alignItems="center" spacing={1}>
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
            <Typography variant="body2">Math</Typography>
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
            <Typography variant="body2">03001234567</Typography>
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
            <Typography variant="body2">Today date</Typography>
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
            <Typography variant="body2">22/10/2022</Typography>
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
          <Button variant="outlined">Check-in</Button>
        </Stack>
      </Box>
    </Box>
  );
};

CheckInDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CheckInDetail;
