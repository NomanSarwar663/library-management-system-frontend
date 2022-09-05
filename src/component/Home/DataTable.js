import * as React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Radio from "@mui/material/Radio";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const rows = [
  {
    id: 1,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  },
  {
    id: 2,
    title: "Math",
    isbn: 34267345245454,
    publishYear: 2020,
    price: 500,
    status: "checkout",
  },
  {
    id: 3,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  },
  {
    id: 4,
    title: "Math",
    isbn: 34267345245454,
    publishYear: 2020,
    price: 500,
    status: "checkout",
  },
  {
    id: 5,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  },
  {
    id: 6,
    title: "Math",
    isbn: 34267345245454,
    publishYear: 2020,
    price: 500,
    status: "checkout",
  },
  {
    id: 7,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  },
  {
    id: 8,
    title: "Math",
    isbn: 34267345245454,
    publishYear: 2020,
    price: 500,
    status: "checkout",
  },
  {
    id: 9,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  },
  {
    id: 10,
    title: "Math",
    isbn: 34267345245454,
    publishYear: 2020,
    price: 500,
    status: "checkout",
  },
  {
    id: 11,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  },
  {
    id: 12,
    title: "Math",
    isbn: 34267345245454,
    publishYear: 2020,
    price: 500,
    status: "checkout",
  },
  {
    id: 13,
    title: "How to program in C to program in C",
    isbn: 56964589645678,
    publishYear: 2019,
    price: 300,
    status: "checkIn",
  },
  {
    id: 14,
    title: "Math",
    isbn: 34267345245454,
    publishYear: 2020,
    price: 500,
    status: "checkout",
  },
];

const columns = [
  {
    id: "title",
    numeric: false,
    padding: false,
    align: "left",
    label: "Book title",
  },
  {
    id: "isbn",
    numeric: true,
    padding: false,
    align: "center",
    label: "ISBN",
  },
  {
    id: "publish-year",
    numeric: true,
    padding: false,
    align: "right",
    label: "Publish year",
  },
  {
    id: "price",
    numeric: true,
    padding: false,
    align: "right",
    label: "Cover price (PKR)",
  },
  {
    id: "status",
    numeric: true,
    padding: true,
    align: "right",
    label: "Status",
  },
];

const TopBar = ({ book }) => {
  return (
    <Toolbar
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        bgcolor: "#1976d2",
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="subtitle1"
        component="div"
        color="white"
      >
        Selected book is: <b>{book.title}</b>
      </Typography>

      <Stack display="flex" flexDirection="row">
        <Stack pr="4">
          <Button
            variant="filled"
            sx={{
              width: "120",
              background: "white",
              "&:hover": { background: "#BDC3C7" },
            }}
          >
            Check in
          </Button>
        </Stack>
        <Stack pr="4">
          <Button
            variant="filled"
            sx={{
              width: "120",
              background: "white",
              "&:hover": { background: "#BDC3C7" },
            }}
          >
            Check out
          </Button>
        </Stack>
        <Stack>
          <Button
            variant="filled"
            sx={{
              width: "120",
              background: "white",
              "&:hover": { background: "#BDC3C7" },
            }}
          >
            Details
          </Button>
        </Stack>
      </Stack>
    </Toolbar>
  );
};

TopBar.propTypes = {
  book: PropTypes.object.isRequired,
};

const DataTable = () => {
  const [selectedRowId, setSelectedRowId] = React.useState(-1);
  const rowsPerPage = 10;
  const [page, setPage] = React.useState(0);

  const handleClick = (event, id) => {
    if (selectedRowId !== id) setSelectedRowId(id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper>
      {selectedRowId !== -1 && (
        <TopBar book={rows.filter((book) => book.id === selectedRowId)[0]} />
      )}
      <TableContainer>
        <Table sx={{ minWidth: 750 }} size="medium">
          <TableHead>
            <TableRow>
              <TableCell />
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  padding={column.padding ? "normal" : "none"}
                  sx={{ fontWeight: 600 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((book, index) => {
                const isItemSelected = selectedRowId === book.id;

                return (
                  <TableRow
                    hover
                    onClick={(event) => {
                      console.log("The book is", book);
                      return handleClick(event, book.id);
                    }}
                    role="radio"
                    tabIndex={-1}
                    key={book.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Radio color="primary" checked={isItemSelected} />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={book.id}
                      scope="row"
                      padding="none"
                    >
                      {book.title}
                    </TableCell>
                    <TableCell align="center">{book.isbn}</TableCell>
                    <TableCell align="right">{book.publishYear}</TableCell>
                    <TableCell align="right">{book.price}</TableCell>
                    <TableCell align="right">{book.status}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default DataTable;
