import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import axios from "axios";
import moment from "moment";

// TODO probably move it somewhere else..
export const useHandleInvoices = (id = "") => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3001/invoices/",
  });
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleApiRequest("get", id, {});
  }, []);

  const handleApiRequest = (method, id, data) => {
    apiClient[method](String(id), data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };
  return { response, isLoading, error, handleApiRequest };
};

export default function InvoiceList() {
  const {
    response: invoiceData,
    isLoading,
    handleApiRequest,
  } = useHandleInvoices("");

  if (isLoading) {
    return <div>Not yet</div>;
  } else {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Recipent Name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Paid</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(invoiceData).map(
              ({ id, date, amount, recipentName, isPaid }) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={"/invoice/" + id}>{id}</Link>
                  </TableCell>
                  <TableCell align="right">
                    {moment(date).format("D MMMM YYYY HH:MM")}
                  </TableCell>
                  <TableCell align="right">{recipentName}</TableCell>
                  <TableCell align="right">{amount}</TableCell>
                  <TableCell align="right">{isPaid ? "yes" : "no"}</TableCell>
                  <TableCell align="right">
                    <Link to={"/invoice/" + id}>
                      <EditIcon />
                    </Link>
                    <Link
                      onClick={() => {
                        handleApiRequest("delete", Number(id), {});
                        window.location.reload();
                      }}
                    >
                      <DeleteIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
