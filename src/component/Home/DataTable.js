import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Radio from "@mui/material/Radio";

// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
  const navigate = useNavigate();
  return (
    <Toolbar
      sx={{
        boxShadow: 5,
        borderRadius: "12px 12px 0px 0px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{ alignItems: "center", width: "100%", p: 1 }}
      >
        <Typography
          sx={{ flex: "1 1 100%", display: "flex", alignItems: "center" }}
          variant="subtitle1"
          component="div"
        >
          Book:
          <Typography
            variant="h6"
            component="div"
            color="primary.main"
            sx={{ ml: 1, fontWeight: 600 }}
          >
            {book.title}
          </Typography>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            disableElevation
            disabled={book.status === "check-in" ? true : false}
            onClick={() => navigate(`/book/${book._id}/check-in`)}
            sx={{
              width: "120",
              display: book.status === "check-in" ? "none" : "block",
            }}
          >
            Check in
          </Button>
          <Button
            variant="contained"
            disableElevation
            disabled={book.status === "check-out" ? true : false}
            onClick={() => navigate(`/book/${book._id}/check-out`)}
            sx={{
              display: book.status === "check-out" ? "none" : "block",
              width: "120",
            }}
          >
            Check out
          </Button>
          <Button
            variant="outlined"
            disableElevation
            onClick={() => navigate(`/book/${book._id}`)}
            sx={{
              width: "120",
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

const DataTable = ({ books }) => {
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
    <Paper sx={{ boxShadow: 5, borderRadius: 3 }}>
      {selectedRowId !== -1 && (
        <TopBar book={books.filter((book) => book._id === selectedRowId)[0]} />
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
            {books
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((book) => {
                const isItemSelected = selectedRowId === book.id;

                return (
                  <StyledTableRow
                    hover
                    onClick={(event) => {
                      console.log("The book is", book);
                      return handleClick(event, book._id);
                    }}
                    role="radio"
                    tabIndex={-1}
                    key={book._id}
                    selected={isItemSelected}
                  >
                    <StyledTableCell padding="checkbox">
                      <Radio color="primary" checked={isItemSelected} />
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      id={book._id}
                      scope="row"
                      padding="none"
                    >
                      <Typography variant="body1" fontWeight="bold">
                        {book.title}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {book.isbn}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {book.publishYear}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {book.coverPrice}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {book.status}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={books.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default DataTable;
