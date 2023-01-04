import React from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import InvoiceForm from "../../Components/InvoiceForm/InvoiceForm";

import { useGetInvoices } from "../../Hooks/useGetInvoices/useGetInvoices";

export default function EditInvoice() {
  const { invoiceId } = useParams();
  const {
    response: invoiceData,
    isLoading,
    error,
  } = useGetInvoices(String(invoiceId));

  if (isLoading)
    return (
      <Box className="flexbox">
        <CircularProgress />
      </Box>
    );

  if (error?.code === "ERR_BAD_REQUEST")
    return <Box className="flexbox">Wrong ID or API error</Box>;

  return <InvoiceForm predefinedFields={invoiceData} />;
}
