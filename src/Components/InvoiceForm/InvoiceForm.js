import { Box, TextField, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import mockedData from "../../mockedData.json";

export default function InvoiceForm() {
  const { invoiceId } = useParams();

  // TODO move this logic level above
  const preDefinedFields = invoiceId
    ? mockedData.filter((item) => item.id === invoiceId)[0]
    : undefined;

  // TODO store dates as objects instead of strings
  const [date, setDate] = useState(preDefinedFields?.date || "");

  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      id: preDefinedFields?.id || "",
      amount: preDefinedFields?.amount || "",
      recipentName: preDefinedFields?.recipentName || "",
      recipentAddress: preDefinedFields?.recipentAddress || "",
      senderName: preDefinedFields?.senderName || "",
      senderAddress: preDefinedFields?.senderAddress || "",
      date: date,
      isPaid: preDefinedFields?.isPaid || false,
    },
  });

  // TODO convert this to saving object instead of just logging input data
  const onSubmit = (data) => {
    console.log({
      ...data,
    });
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
              defaultChecked={Boolean(preDefinedFields?.isPaid)}
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
