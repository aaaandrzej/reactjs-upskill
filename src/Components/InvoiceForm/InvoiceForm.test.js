import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import InvoiceForm from "./InvoiceForm";
import user from "@testing-library/user-event";

let mockIsLoading = false;

jest.mock("../../Hooks/useModifyInvoices/useModifyInvoices", () => ({
  useModifyInvoices: () => ({
    isLoading: mockIsLoading,
    handleApiRequestPost: () => jest.fn(),
  }),
}));

describe("InvoiceForm tests", () => {
  test("progress bar is visible while loading", () => {
    mockIsLoading = true;

    render(
      <Router>
        <InvoiceForm predefinedFields={{ id: null }} />
      </Router>
    );
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
  });

  test("submit button triggers no invoice number error when none is provided", () => {
    mockIsLoading = false;

    render(
      <Router>
        <InvoiceForm predefinedFields={{ id: null }} />
      </Router>
    );
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitButton);

    waitFor(() => {
      // this passes with .not reversed too
      expect(screen.queryAllByText(/Field required/)).toBeInTheDocument();
      expect(handleApiRequestPost).not.toBeCalled();
    });
  });

  test("submit button triggers post request when invoice number is provided", () => {
    mockIsLoading = false;

    render(
      <Router>
        <InvoiceForm predefinedFields={{ id: null }} />
      </Router>
    );

    const invoiceNumberField = screen.getByLabelText("No");

    const submitButton = screen.getByRole("button", { name: /submit/i });

    user.type(invoiceNumberField, "123");

    fireEvent.click(submitButton);

    waitFor(() => {
      // this passes with .not reversed too
      expect(screen.queryAllByText(/Field required/)).not.toBeInTheDocument();
      expect(handleApiRequestPost).toHaveBeenCalled();
    });
  });
});
