import React from "react";
import { useParams } from "react-router-dom";

import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";

import { useHandleInvoices } from "../../Hooks/useHandleInvoices/useHandleInvoices";

export default function EditInvoice() {
  const { invoiceId } = useParams();
  const {
    response: invoiceData,
    isLoading,
    error,
  } = useHandleInvoices(String(invoiceId));

  if (isLoading) return <div>Not yet</div>;
  if (error?.code === "ERR_BAD_REQUEST")
    return <div>Wrong ID or API error</div>;
  return <InvoiceForm predefinedFields={invoiceData} />;
}
