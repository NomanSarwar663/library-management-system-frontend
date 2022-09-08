import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  Alert,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
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

function createData(name, checkInDate, checkOutDate) {
  return {
    name,
    checkInDate,
    checkOutDate,
  };
}

const rows = [
  createData("Karen", "01/09/2022", "21/08/2022"),
  createData("Esperanza Mcintyre", "01/09/2022", "21/08/2022"),
  createData("Brycen Jimenez", "01/09/2022", "21/08/2022"),
  createData("Melanie Noble", "01/09/2022", "21/08/2022"),
  createData("Theresa", "01/09/2022", "21/08/2022"),
  createData("John", "01/09/2022", "21/08/2022"),
  createData("Jessica", "01/09/2022", "21/08/2022"),
];

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "check-in-date",
    numeric: true,
    disablePadding: false,
    label: "CheckIn Date",
  },
  {
    id: "check-out-date",
    numeric: true,
    disablePadding: false,
    label: "CheckOut Date",
  },
];

const IssuedHistoryTable = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%", borderRadius: 5 }}>
      {data ? (
        <Paper sx={{ width: "100%", borderRadius: 5, boxShadow: 0 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: "#808080", color: "#fff" }}>
                  {headCells.map((cell) => (
                    <TableCell
                      align="left"
                      key={cell.id}
                      sx={{ color: "#fff" }}
                    >
                      {cell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ p: 1 }}>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <StyledTableRow role="checkbox" tabIndex={-1} key={index}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          padding="none"
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{ pl: 2 }}
                          >
                            <Typography variant="body1" noWrap>
                              {row.name}
                            </Typography>
                          </Stack>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.checkInDate}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.checkOutDate}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <StyledTableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <StyledTableCell colSpan={6} />
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <Stack alignItems="center" sx={{ pb: 3 }}>
          <Alert severity="info" sx={{ display: "flex", alignItems: "center" }}>
            This Book has not been Issued Yet!
          </Alert>
        </Stack>
      )}
    </Box>
  );
};

export default IssuedHistoryTable;
