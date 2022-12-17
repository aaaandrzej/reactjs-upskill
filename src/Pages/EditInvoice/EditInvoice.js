import { useParams } from "react-router-dom";
import { rows } from "../mockedData";
import InvoiceForm from "../InvoiceForm";

export default function EditInvoice() {
  const params = useParams();
  return InvoiceForm(rows[params.invoiceId - 1]);
}
