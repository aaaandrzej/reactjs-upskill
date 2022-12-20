import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import mockedData from "../../mockedData.json";

export default function InvoiceForm() {
  const { invoiceId } = useParams();

  const preDefinedFields = invoiceId
    ? mockedData.filter((item) => item.id === invoiceId)[0]
    : undefined;
  // TODO consult if calling [0] here is acceptable, and if we need if/else

  const { register, handleSubmit } = useForm();

  // TODO convert this to saving object instead of just logging input data
  const onSubmit = (data) =>
    console.log(
      `Invoice date: ${data.date.toDateString()}`,
      `Invoice amount: ${data.amount}`,
      `Paid: ${data.isPaid ? "yes" : "no"}`
    );

  return (
    <Box sx={{ margin: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>No</label>
          <input
            type="number"
            {...register("invoiceId", {
              required: true,
              value: preDefinedFields?.id,
            })}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            {...register("date", {
              valueAsDate: true,
              value: preDefinedFields?.date,
            })}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            {...register("amount", {
              required: true,
              value: preDefinedFields?.amount,
            })}
          />
        </div>
        <div>
          <label>Recipent&apos;s Name</label>
          <input
            {...register("recipentName", {
              value: preDefinedFields?.recipentName,
            })}
          />
        </div>
        <div>
          <label>Recipent&apos;s Address</label>
          <input
            {...register("recipentAddress", {
              value: preDefinedFields?.recipentAddress,
            })}
          />
        </div>
        <div>
          <label>Sender&apos;s Name</label>
          <input
            {...register("senderName", { value: preDefinedFields?.senderName })}
          />
        </div>
        <div>
          <label>Sender&apos;s Address</label>
          <input
            {...register("senderAddress", {
              value: preDefinedFields?.senderAddress,
            })}
          />
        </div>
        <div>
          <label>Paid</label>
          <select
            {...register("isPaid", {
              value: preDefinedFields?.isPaid ? true : false,
            })}
          >
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>
          <input type="submit" />
        </div>
      </form>
    </Box>
  );
}
