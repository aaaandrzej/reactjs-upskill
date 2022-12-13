import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceList from "./Pages/InvoiceList/InvoiceList";
// import InvoiceDetails from "./Pages/EditInvoice/EditInvoice";
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
        {/* TODO fix the dynamic route for editing invoice*/}
        {/* TODO eslint complaints that params is never used, but see https://reactrouter.com/en/main/route/route#dynamic-segments */}
        {/* <Route
          path="/invoice/:invoiceId"
          loader={({ params }) => {
            console.log(params.invoiceId);
          }}
          action={({ params }) => {}}
          // element={<InvoiceDetails />}
          element={ console.log(params.invoiceId)}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
