import * as React from "react";
// propTypes
import PropTypes from "prop-types";
// mui
import { Box, Typography, Stack, Alert, Grid } from "@mui/material";
import IssuedHistoryTable from "./IssuedHistoryTable";

const BookDetail = () => {
  return (
    <Box
      width="100%"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ p: 4, borderRadius: 3, boxShadow: 5 }}>
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ matginBottom: "50px", textAlign: "center", mb: 2 }}
              color="primary.main"
            >
              Book Details
            </Typography>
            <Stack>
              <Alert
                severity="warning"
                sx={{ display: "flex", alignItems: "center" }}
              >
                This Book is Currently Issued to{" "}
                <Typography
                  variant="subtitle1"
                  display="inline"
                  component="span"
                  sx={{ ml: 1 }}
                >
                  NOMAN SARWAR!
                </Typography>
              </Alert>
            </Stack>
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                Book Title:
              </Typography>
              <Typography variant="body2">Math</Typography>
            </Stack>
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                ISBN:
              </Typography>
              <Typography variant="body2">3577689865436789</Typography>
            </Stack>
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                Publish Year:
              </Typography>
              <Typography variant="body2">2022</Typography>
            </Stack>
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                Cover price:
              </Typography>
              <Typography variant="body2">300 pkr</Typography>
            </Stack>
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                Status:
              </Typography>
              <Typography variant="body2">Check-in</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack component="div" sx={{ p: 4, borderRadius: 3, boxShadow: 5 }}>
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ matginBottom: "50px", textAlign: "center", mb: 2 }}
              color="primary.main"
            >
              Issued Details
            </Typography>
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                Issuer Name:
              </Typography>
              <Typography variant="body2">Noman Sarwar</Typography>
            </Stack>
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                Phone no:
              </Typography>
              <Typography variant="body2">03001234567</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            component="div"
            sx={{ marginTop: "20px", borderRadius: 3, boxShadow: 5 }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ matginBottom: "50px", textAlign: "center", p: 4 }}
              color="primary.main"
            >
              Issued History
            </Typography>
            <IssuedHistoryTable />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

BookDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BookDetail;
