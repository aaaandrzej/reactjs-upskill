import { Box, TextField, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useHandleInvoice } from "../../Pages/InvoiceList/InvoiceList";

export default function InvoiceForm({ predefinedFields }) {
  // TODO store dates as objects instead of strings
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
  const { handlePostRequest } = useHandleInvoice();

  const onSubmit = (data) => {
    // TODO handle issue when id is the same -> maybe use put instead
    handlePostRequest(data);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{ margin: 1, display: "inline-flex", flexDirection: "column" }}
        >
          <TextField
            {...register("id")}
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
            {...register("amount")}
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
