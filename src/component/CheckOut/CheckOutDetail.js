import * as React from "react";
// propTypes
import PropTypes from "prop-types";
// mui
import { Box, Stack, Button } from "@mui/material";
import CheckOutForm from "./CheckOutForm";

const CheckOutDetail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        sx={{
          width: { xs: "100%", md: "50%" },
          boxShadow: 5,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Stack alignItems="center" justifyContent="center" width="50%">
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
        <Stack
          component="div"
          width={{ xs: "100%", md: "50%" }}
          sx={{ pt: { xs: 3, md: 0 } }}
        >
          <CheckOutForm />
        </Stack>
      </Stack>
    </Box>
  );
};

CheckOutDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CheckOutDetail;
