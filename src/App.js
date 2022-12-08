import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceList from "./Pages/InvoiceList/InvoiceList";
import AddNewInvoiceForm from "./Pages/AddNewInvoice/AddNewInvoice";
import { Navigation } from "./Components/Navigation/Navigation";

import routes from "./routes.json";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation routes={routes} />
      <Routes>
        <Route path={routes.list.route} element={<InvoiceList />} />
        <Route path={routes.add.route} element={<AddNewInvoiceForm />} />
      </Routes>
    </BrowserRouter>
  );
}
