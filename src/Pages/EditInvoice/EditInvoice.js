import React from "react";
import { useParams } from "react-router-dom";

import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";

import { useGetInvoices } from "../../Pages/InvoiceList/InvoiceList";

export default function EditInvoice() {
  const { invoiceId } = useParams();
  const { data: invoiceData, isLoading, error } = useGetInvoices(invoiceId);

  if (isLoading) return <div>Not yet</div>;
  else if (error?.code === "ERR_BAD_REQUEST")
    return <div>Wrong ID or API error</div>;
  else return <InvoiceForm predefinedFields={invoiceData} />;
}
