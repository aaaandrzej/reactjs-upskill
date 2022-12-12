import * as React from "react";

import { useForm } from "react-hook-form";

export default function AddNewInvoiceForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>
    console.log(
      "Invoice data: " + data.date.toDateString(),
      "Invoice amount: " + data.amount,
      "Paid: " + data.isPaid
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>No</label>
        <input type="number" {...register("no", { required: true })} />
      </div>
      <div>
        <label>Date</label>
        <input {...register("date", { valueAsDate: true })} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" {...register("amount", { required: true })} />
      </div>
      <div>
        <label>Recipent&apos;s Name</label>
        <input {...register("recipentName")} />
      </div>
      <div>
        <label>Recipent&apos;s Address</label>
        <input {...register("recipentAddress")} />
      </div>
      <div>
        <label>Sender&apos;s Name</label>
        <input {...register("senderName")} />
      </div>
      <div>
        <label>Sender&apos;s Address</label>
        <input {...register("senderAddress")} />
      </div>
      <div>
        <label>Paid</label>
        <select {...register("isPaid")}>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <input type="submit" />
      </div>
    </form>
  );
}
