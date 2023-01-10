import { render, screen } from "@testing-library/react";
import { jest } from "@jest/globals";
import { BrowserRouter as Router } from "react-router-dom";
import InvoiceForm from "./InvoiceForm";

test("test1", () => {
  // TODO fix hook mock
  //   let mockIsLoading = false

  //   jest.mock('../../Hooks/useGetInvoices', () => {
  //     return jest.fn(() => ({
  //        isLoading: mockIsLoading
  //     }))
  // })

  render(
    <Router>
      <InvoiceForm predefinedFields={{ id: null }} />
    </Router>
  );

  screen.debug();

  // TODO tests:
  // TODO mock isLoading to true and see if spinner is active
  // TODO click on submit with no invoice number and see if error is triggerred
  // TODO click on submit with some invoice number and see if handleSubmit was called with this data
});
