import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceList from "./Pages/InvoiceList/InvoiceList";
import EditInvoice from "./Pages/EditInvoice/EditInvoice";
import NotFound from "./Pages/NotFound/NotFound";
import { Navigation } from "./Components/Navigation/Navigation";

import routes from "./routes.json";
import AddNewInvoice from "./Pages/AddNewInvoice/AddNewInvoice";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation routes={routes} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={routes.list.route} element={<InvoiceList />} />
        <Route path={routes.add.route} element={<AddNewInvoice />} />
        <Route path={"/invoice/:invoiceId"} element={<EditInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}
