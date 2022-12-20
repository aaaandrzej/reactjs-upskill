import React from "react";
import { useParams } from "react-router-dom";
import mockedData from "../../mockedData.json";

import InvoiceForm from "../InvoiceForm";

export default function EditInvoice() {
  const params = useParams();
  <InvoiceForm preDefinedId={params.invoiceId} preDefinedFields={mockedData[params.invoiceId]} />
}
