import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const DataTable = ({ data }) => {
  return (
    <TableContainer sx={{ mt: 4 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, number, name, phone, address }) => {
            return (
              <TableRow
                key={number}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {number}
                </TableCell>
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{phone}</TableCell>
                <TableCell align="right">{address}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
