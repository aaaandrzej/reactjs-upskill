import React from "react";
import { useParams } from "react-router-dom";

import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";

import { useGetInvoices } from "../../Pages/InvoiceList/InvoiceList";

export default function EditInvoice() {
  const { invoiceId } = useParams();
  const { data: invoiceData } = useGetInvoices(invoiceId);

  if (invoiceData?.id > 0)
    return <InvoiceForm predefinedFields={invoiceData} />;
  else return <div>Not yet</div>;
}
