import * as React from "react";
import { useForm } from "react-hook-form";

export default function InvoiceForm(preDefinedFields = undefined) {
  const { register, handleSubmit } = useForm();

  // TODO convert this to saving object instead of just logging input data
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
        <input
          type="number"
          {...register("no", { required: true, value: preDefinedFields.no })}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          {...register("date", {
            valueAsDate: true,
            value: preDefinedFields.date,
          })}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          {...register("amount", {
            required: true,
            value: preDefinedFields.amount,
          })}
        />
      </div>
      <div>
        <label>Recipent&apos;s Name</label>
        <input
          {...register("recipentName", {
            value: preDefinedFields.recipentName,
          })}
        />
      </div>
      <div>
        <label>Recipent&apos;s Address</label>
        <input
          {...register("recipentAddress", {
            value: preDefinedFields.recipentAddress,
          })}
        />
      </div>
      <div>
        <label>Sender&apos;s Name</label>
        <input
          {...register("senderName", { value: preDefinedFields.senderName })}
        />
      </div>
      <div>
        <label>Sender&apos;s Address</label>
        <input
          {...register("senderAddress", {
            value: preDefinedFields.senderAddress,
          })}
        />
      </div>
      <div>
        <label>Paid</label>
        <select {...register("isPaid", { value: preDefinedFields.isPaid })}>
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <input type="submit" />
      </div>
    </form>
  );
}
