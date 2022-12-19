import { useParams } from "react-router-dom";
import mockedData from "../../mockedData.json";

import InvoiceForm from "../InvoiceForm";

export default function EditInvoice() {
  const params = useParams();
  return InvoiceForm(params.invoiceId, mockedData[params.invoiceId]);
}
