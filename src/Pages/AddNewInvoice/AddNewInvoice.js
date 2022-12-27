import React from "react";
import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";

const emptyInvoice = {
  id: "",
  amount: "",
  recipentName: "",
  recipentAddress: "",
  senderName: "",
  senderAddress: "",
  date: new Date(),
  isPaid: false,
};

const AddNewInvoice = () => <InvoiceForm predefinedFields={emptyInvoice} />;

export default AddNewInvoice;
