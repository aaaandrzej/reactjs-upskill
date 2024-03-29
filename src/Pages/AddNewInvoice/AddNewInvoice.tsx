import React from "react";
import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";

export const emptyInvoice = {
  id: undefined,
  number: "",
  amount: 0,
  recipentName: "",
  recipentAddress: "",
  senderName: "",
  senderAddress: "",
  date: new Date(),
  isPaid: false,
};

const AddNewInvoice = () => <InvoiceForm predefinedFields={emptyInvoice} />;

export default AddNewInvoice;
