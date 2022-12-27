import { Box, TextField, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import mockedData from "../../mockedData.json";

export default function InvoiceForm() {
  const { invoiceId } = useParams();

  const preDefinedFields = invoiceId
    ? mockedData.filter((item) => item.id === invoiceId)[0]
    : undefined;

  const [date, setDate] = useState(preDefinedFields?.date || "");

  const { control, handleSubmit, register, setValue } = useForm({
    defaultValues: {
      id: preDefinedFields?.id || "",
      amount: preDefinedFields?.amount || "",
      recipentName: preDefinedFields?.recipentName || "",
      recipentAddress: preDefinedFields?.recipentAddress || "",
      senderName: preDefinedFields?.senderName || "",
      senderAddress: preDefinedFields?.senderAddress || "",
      date: date
    },
  });

  // TODO convert this to saving object instead of just logging input data
  const onSubmit = (data) => {
    // TODO probably such manipulations should happen within the field and not on submit...
    console.log({
      ...data,
      date: data?.date?._d ? data.date._d.toString() : data.date || "",
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
          {/* <Controller
            name="date"
            defaultValue={date}
            control={control}
            render={({ field: { onChange, ...restField } }) => (
              <DatePicker
                label="Date"
                onChange={(event) => {
                  onChange(event);
                  setDate(event);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="standard-basic"
                    variant="standard"
                  />
                )}
                {...restField}
              />
            )}
          /> */}
          {/* convert this to sth like: */}
          <DatePicker
            {...register("date")}
            label="Date"
            onChange={(newValue) => {
              setValue('date', newValue);
              setDate(newValue);
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
            <Controller
              name="isPaid"
              // this is probably very bad but it finally works
              defaultValue={Boolean(preDefinedFields?.isPaid)}
              control={control}
              render={({ field: props }) => (
                <Checkbox
                  {...props}
                  onChange={(e) => props.onChange(Boolean(e.target.checked))}
                  defaultChecked={Boolean(preDefinedFields?.isPaid)}
                />
              )}
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
