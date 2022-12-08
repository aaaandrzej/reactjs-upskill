import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceList from "./Pages/InvoiceList/InvoiceList";
import AddNewInvoiceForm from "./Pages/AddNewInvoice/AddNewInvoice";
import { Navigation } from "./Components/Navigation/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={RoutePaths["list"]} element={<InvoiceList />} />
        <Route path={RoutePaths["add"]} element={<AddNewInvoiceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export const RoutePaths = require("./routes.json");
