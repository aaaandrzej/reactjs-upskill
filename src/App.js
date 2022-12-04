import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import InvoiceList from "./InvoiceList";
import AddNewInvoice from "./AddNewInvoice";
import { Button } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Button component={Link} to="/">Invoices</Button>
        <Button component={Link} to="/add">Add New Invoice</Button>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="/add" element={<AddNewInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}




