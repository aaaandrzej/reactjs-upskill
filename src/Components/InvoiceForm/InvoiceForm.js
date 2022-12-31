import { Box, TextField, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useHandleInvoices } from "../../Hooks/useHandleInvoices/useHandleInvoices";

export default function InvoiceForm({ predefinedFields }) {
  const [date, setDate] = useState(predefinedFields.date);

  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      id: predefinedFields.id,
      amount: predefinedFields.amount,
      recipentName: predefinedFields.recipentName,
      recipentAddress: predefinedFields.recipentAddress,
      senderName: predefinedFields.senderName,
      senderAddress: predefinedFields.senderAddress,
      date: date,
      isPaid: predefinedFields.isPaid,
    },
  });
  const {
    response: invoicesList,
    isLoading,
    handleApiRequest,
  } = useHandleInvoices();

  const invoiceIds =
    invoicesList.length > 0 ? invoicesList.map((invoice) => invoice.id) : [];

  const onSubmit = (data) => {
    const method = data?.id in invoiceIds ? "put" : "post";
    const id = method.toLowerCase() === "post" ? "" : data?.id;
    if (!isLoading) {
      handleApiRequest(method, id, data);
      window.location = "/";
    }
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return isLoading ? (
    <div>Not yet</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{ margin: 1, display: "inline-flex", flexDirection: "column" }}
        >
          <TextField
            {...register("id", { required: true, valueAsNumber: true })}
            required
            type="number"
            label="No"
            id="standard-basic"
            variant="standard"
          />
          <DatePicker
            {...register("date")}
            label="Date"
            value={date}
            onChange={(newValue) => {
              setValue("date", newValue._d);
              setDate(newValue._d);
            }}
            renderInput={(params) => (
              <TextField {...params} id="standard-basic" variant="standard" />
            )}
          />

          <TextField
            {...register("amount", { valueAsNumber: true })}
            type="number"
            inputProps={{ step: "0.01" }}
            label="Amount"
            id="standard-basic"
            variant="standard"
          />

          <TextField
            {...register("recipentName")}
            label="Recipent's Name"
            id="standard-basic"
            variant="standard"
          />

          <TextField
            {...register("recipentAddress")}
            label="Recipent's Address"
            id="standard-basic"
            variant="standard"
          />

          <TextField
            {...register("senderName")}
            label="Sender's Name"
            id="standard-basic"
            variant="standard"
          />

          <TextField
            {...register("senderAddress")}
            label="Sender's Address"
            id="standard-basic"
            variant="standard"
          />

          <div>
            Paid
            <Checkbox
              {...register("isPaid")}
              defaultChecked={predefinedFields.isPaid}
            />
          </div>
          <ThemeProvider theme={theme}>
            <Button type="submit" variant="contained" color="neutral">
              Submit
            </Button>
          </ThemeProvider>
        </Box>
      </LocalizationProvider>
    </form>
  );
}
