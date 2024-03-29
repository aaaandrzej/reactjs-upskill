import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  CircularProgress,
  Box,
  TableCell,
  TableContainer,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";

import moment from "moment";
import { useGetInvoices } from "../../Hooks/useGetInvoices/useGetInvoices";
import { useDeleteInvoices } from "../../Hooks/useDeleteInvoices/useDeleteInvoices";

export default function InvoiceList() {
  const {
    response: invoiceData,
    isLoading: isLoadingGet,
    handleApiRequestGet,
  } = useGetInvoices();

  const { isLoading: isLoadingDelete, handleApiRequestDelete } =
    useDeleteInvoices();

  const isLoading = isLoadingDelete || isLoadingGet;

  const navigate = useNavigate();

  if (isLoading)
    return (
      <Box className="full-height-wrapper">
        <CircularProgress />
      </Box>
    );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Recipent</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Paid</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(invoiceData).map(
            ({ id, number, date, amount, recipentName, isPaid }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={"/invoice/" + id}>{number}</Link>
                </TableCell>
                <TableCell align="right">
                  {moment(date).format("D MMMM YYYY")}
                </TableCell>
                <TableCell align="right">{recipentName}</TableCell>
                <TableCell align="right">{amount}</TableCell>
                <TableCell align="right">{isPaid ? "yes" : "no"}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => navigate("/invoice/" + id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleApiRequestDelete(String(id)).then(() =>
                        handleApiRequestGet()
                      );
                    }}
                    disabled={isLoading}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
