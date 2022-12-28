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

// TODO probably move it somewhere else..
export const useGetInvoices = (id = "") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    pullInvoicesfromApi();
  }, []);

  const pullInvoicesfromApi = () => {
    axios
      .get(`http://localhost:3001/invoices/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  };

  return { data, isLoading, error };
};

export default function InvoiceList() {
  const { data: invoiceData, isLoading } = useGetInvoices("");

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
                  <TableCell align="right">{date}</TableCell>
                  <TableCell align="right">{recipentName}</TableCell>
                  <TableCell align="right">{amount}</TableCell>
                  <TableCell align="right">{isPaid ? "yes" : "no"}</TableCell>
                  <TableCell align="right">
                    <Link to={"/invoice/" + id}>
                      <EditIcon />
                    </Link>
                    <Link>
                      {/* TODO redirect delete action properly */}
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
