import * as React from "react";
// propTypes
import PropTypes from "prop-types";
// mui
import { Box, Typography, Stack, Alert, Grid, Chip } from "@mui/material";
import IssuedHistoryTable from "./IssuedHistoryTable";
import { useParams } from "react-router-dom";
import { GetBookDetail } from "../../Api";

const BookDetail = () => {
  const [book, setBook] = React.useState({});
  const { bookId } = useParams();
  console.log(bookId);

  const GetDetail = async () => {
    const result = await GetBookDetail(bookId);
    console.log(result);
    setBook(result.book);
  };

  React.useEffect(() => {
    GetDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {book.issuedDetail ? (
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
                    {book.issuedDetail.borrowerName}!
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
              <Typography variant="h6">{book.title}</Typography>
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
              <Typography variant="body2">{book.isbn}</Typography>
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
              <Typography variant="body2">{book.publishYear}</Typography>
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
              <Typography variant="body2">{book.coverPrice} pkr</Typography>
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
                {book.status === "check-in" ? (
                  <Chip label={book.status} color="success" />
                ) : (
                  <Chip label={book.status} color="warning" />
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
            {book.issuedDetail ? (
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
              </>
            ) : (
              <Stack>
                <Alert
                  severity="success"
                  variant="outlined"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  This Book is Not Issued Yet
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
            <IssuedHistoryTable data={book.issuedHistory} />
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
