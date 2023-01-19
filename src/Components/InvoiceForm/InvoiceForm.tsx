import {
  Box,
  TextField,
  Checkbox,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { Moment } from "moment";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

import { useModifyInvoices } from "../../Hooks/useModifyInvoices/useModifyInvoices";

import { useNavigate } from "react-router";

interface PredefinedFieldsProps {
  number: string;
  amount: number;
  recipentName: string;
  recipentAddress: string;
  senderName: string;
  senderAddress: string;
  date: Moment;
  isPaid: boolean;
  id?: number;
}

interface InvoiceFormProps {
  predefinedFields: PredefinedFieldsProps;
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default function InvoiceForm({ predefinedFields }: InvoiceFormProps) {
  const [date, setDate] = useState(predefinedFields.date);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: predefinedFields.number,
      amount: predefinedFields.amount,
      recipentName: predefinedFields.recipentName,
      recipentAddress: predefinedFields.recipentAddress,
      senderName: predefinedFields.senderName,
      senderAddress: predefinedFields.senderAddress,
      date: date,
      isPaid: predefinedFields.isPaid,
    },
  });
  const { isLoading, handleApiRequestPost, handleApiRequestPut } =
    useModifyInvoices();

  const navigate = useNavigate();

  const onSubmit = (data: PredefinedFieldsProps) => {
    predefinedFields.id
      ? handleApiRequestPut(String(predefinedFields.id), data)
      : handleApiRequestPost(data);
    navigate("/");
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  if (isLoading)
    return (
      <Box className="full-height-wrapper">
        <CircularProgress />
      </Box>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{ margin: 1, display: "inline-flex", flexDirection: "column" }}
        >
          <TextField
            {...register("number", { required: "Field required" })}
            helperText={errors?.number?.message}
            error={!!errors.number}
            label="No"
            id="standard-basic"
            variant="standard"
          />
          <DatePicker
            {...register("date")}
            label="Date"
            value={date}
            onChange={(newValue) => {
              setValue("date", newValue?._d);
              setDate(newValue?._d);
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
            <Button
              type="submit"
              variant="contained"
              color="neutral"
              disabled={isLoading}
            >
              Submit
            </Button>
          </ThemeProvider>
        </Box>
      </LocalizationProvider>
    </form>
  );
}
