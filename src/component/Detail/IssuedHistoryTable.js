import { useState } from "react";
// mui
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
// moment library
import moment from "moment";

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
    id: 1,
    title: "Name",
    align: "left",
  },
  {
    id: 2,
    title: "CheckIn Date",
    align: "center",
  },
  {
    id: 3,
    title: "CheckOut Date",
    align: "right",
  },
];

const IssuedHistoryTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
                  {columns.map((cell) => (
                    <TableCell
                      align={cell.align}
                      key={cell.id}
                      sx={{ color: "#fff" }}
                    >
                      {cell.title}
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
                          sx={{ pl: 2 }}
                        >
                          <Stack direction="row" alignItems="center">
                            <Typography variant="body1" noWrap>
                              {row.issuer?.name}
                            </Typography>
                          </Stack>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.checkInDate &&
                            moment(row.checkInDate).format("MM/DD/YYYY")}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.checkOutDate &&
                            moment(row.checkOutDate).format("MM/DD/YYYY")}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
            page={page}
            onPageChange={handleChangePage}
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
