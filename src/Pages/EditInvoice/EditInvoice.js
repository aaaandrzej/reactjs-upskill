import React from "react";
import { useParams } from "react-router-dom";

import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";
import invoiceData from "../../invoiceData.json";

export default function EditInvoice() {
  const { invoiceId } = useParams();

  const predefinedFields = invoiceData.filter(
    (item) => item.id === invoiceId
  )[0];

  return <InvoiceForm predefinedFields={predefinedFields} />;
}
