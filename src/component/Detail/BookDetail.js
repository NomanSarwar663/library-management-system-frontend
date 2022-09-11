import * as React from "react";
// mui
import { Box, Typography, Stack, Alert, Grid, Chip } from "@mui/material";
import IssuedHistoryTable from "./IssuedHistoryTable";

const BookDetail = ({ data }) => {

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
            {data.book.issuedDetails?.issuer?.name != null ? (
              <Stack>
                <Alert
                  severity="warning"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  This Book is Currently Issued to
                  <Typography
                    variant="subtitle1"
                    display="inline"
                    component="span"
                    sx={{ ml: 1 }}
                  >
                    {data.book.issuedDetails?.issuer?.name}!
                  </Typography>
                </Alert>
              </Stack>
            ) : (
              <></>
            )}
            <Stack
              component="span"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight="600">
                Book Title:
              </Typography>
              <Typography variant="body2">{data.book.title}</Typography>
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
              <Typography variant="body2">{data.book.isbn}</Typography>
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
              <Typography variant="body2">{data.book.publishYear}</Typography>
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
              <Typography variant="body2">
                {data.book.coverPrice} pkr
              </Typography>
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
              <Box>
                {data.book.status === "check-in" ? (
                  <Chip label={data.book.status} color="success" />
                ) : (
                  <Chip label={data.book.status} color="warning" />
                )}
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            component="div"
            spacing={2}
            sx={{ p: 4, borderRadius: 3, boxShadow: 5 }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ matginBottom: "50px", textAlign: "center" }}
              color="primary.main"
            >
              Issued Details
            </Typography>
            {data.book.issuedDetails?.issuer?.name != null ? (
              <>
                <Stack
                  component="span"
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" fontWeight="600">
                    Issuer Name:
                  </Typography>
                  <Typography variant="body2">
                    {data.book.issuedDetails?.issuer?.name}
                  </Typography>
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
                  <Typography variant="body2">
                    {data.book.issuedDetails.issuer.phoneNo}
                  </Typography>
                </Stack>
              </>
            ) : (
              <Stack>
                <Alert
                  severity="info"
                  variant="outlined"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  This Book is not Currently Issued!
                </Alert>
              </Stack>
            )}
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
            <IssuedHistoryTable data={data.bookHistory} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookDetail;
