import React from "react";
import { useParams } from "react-router-dom";

import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";
import invoices from "../../invoiceData.json";
import emptyInvoice from "../AddNewInvoice/AddNewInvoice";

export default function EditInvoice() {
  const invoiceData = [...invoices["invoices"]];

  const { invoiceId } = useParams();

  const predefinedFields =
    invoiceId in invoiceData.map((item) => item.id)
      ? invoiceData.filter((item) => item.id === invoiceId)[0]
      : emptyInvoice;

  return <InvoiceForm predefinedFields={predefinedFields} />;
}
