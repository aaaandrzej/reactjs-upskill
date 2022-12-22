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
  // TODO consult if calling [0] here is acceptable, and if we need if/else

  const [date, setDate] = useState(
    preDefinedFields?.date ? preDefinedFields.date : ""
  );

  const { control, handleSubmit } = useForm({
    defaultValues: {
      // can't use preDefinedFields?.id etc due to react_devtools_backend.js:4012 Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
      // neither can use `id: preDefinedFields ? preDefinedFields.id : "",`
    },
  });

  // TODO convert this to saving object instead of just logging input data
  const onSubmit = (data) => {
    // TODO probably such manipulations should happen within the field and not on submit...
    data.date = data?.date?._d ? data.date._d.toString() : data.date || "";
    console.log(data);
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
    <Box sx={{ margin: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="id"
          // can't use preDefinedFields?.id etc due to the same warning as above
          // neither can use defaultValues at useForm level or in TextField - has to be at Controller level to work
          defaultValue={preDefinedFields?.id ? preDefinedFields.id : ""}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="No"
              id="standard-basic"
              variant="standard"
            />
          )}
        />
        <Controller
          name="date"
          defaultValue={date}
          control={control}
          render={({ field: { onChange, ...restField } }) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
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
            </LocalizationProvider>
          )}
        />
        <Controller
          name="ammount"
          defaultValue={preDefinedFields?.amount ? preDefinedFields.amount : ""}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Ammount"
              id="standard-basic"
              variant="standard"
            />
          )}
        />
        <Controller
          name="recipentName"
          defaultValue={
            preDefinedFields?.recipentName ? preDefinedFields.recipentName : ""
          }
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Recipent's Name"
              id="standard-basic"
              variant="standard"
            />
          )}
        />
        <Controller
          name="recipentAddress"
          defaultValue={
            preDefinedFields?.recipentAddress
              ? preDefinedFields.recipentAddress
              : ""
          }
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Recipent's Address"
              id="standard-basic"
              variant="standard"
            />
          )}
        />
        <Controller
          name="senderName"
          defaultValue={
            preDefinedFields?.senderName ? preDefinedFields.senderName : ""
          }
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Sender's Name"
              id="standard-basic"
              variant="standard"
            />
          )}
        />
        <Controller
          name="senderAddress"
          defaultValue={
            preDefinedFields?.senderAddress
              ? preDefinedFields.senderAddress
              : ""
          }
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Sender's Address"
              id="standard-basic"
              variant="standard"
            />
          )}
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
      </form>
    </Box>
  );
}
