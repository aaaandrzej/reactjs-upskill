import React from "react";
import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";

import { useHandleInvoices } from "../InvoiceList/InvoiceList";

export const emptyInvoice = {
  id: null,
  amount: 0,
  recipentName: "",
  recipentAddress: "",
  senderName: "",
  senderAddress: "",
  date: new Date(),
  isPaid: false,
};

const AddNewInvoice = () => {
  const { response: invoiceData, isLoading } = useHandleInvoices();

  const newId =
    Math.max(...(invoiceData.map((invoice) => Number(invoice.id)) || [0])) + 1;
  const emptyInvoiceWithId = { ...emptyInvoice, id: newId };

  return isLoading ? (
    <div>Not yet</div>
  ) : (
    <InvoiceForm predefinedFields={emptyInvoiceWithId} />
  );
};

export default AddNewInvoice;
