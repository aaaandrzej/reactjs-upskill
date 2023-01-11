import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import InvoiceForm from "./InvoiceForm";

let mockIsLoading = true;

jest.mock("../../Hooks/useModifyInvoices/useModifyInvoices", () => ({
  useModifyInvoices: () => ({ isLoading: { mockIsLoading } }),
}));

test("progress bar is visible while loading", () => {
  render(
    <Router>
      <InvoiceForm predefinedFields={{ id: null }} />
    </Router>
  );
  const progressBar = screen.getByRole("progressbar");
  expect(progressBar).toBeInTheDocument();

  // TODO tests:
  // TODO click on submit with no invoice number and see if error is triggerred
  // TODO click on submit with some invoice number and see if handleSubmit was called with this data
});
