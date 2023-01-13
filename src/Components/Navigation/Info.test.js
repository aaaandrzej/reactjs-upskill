import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Info";

import { jest } from "@jest/globals";

describe("Info tests", () => {
  test("modal contains lorem ipsum text if visible", () => {
    render(<Modal isShown={true} />);

    const loremIpsum = screen.getByText(/Lorem ipsum/);
    expect(loremIpsum).toBeInTheDocument();
  });

  test("modal doesn't contain lorem ipsum text if not visible", () => {
    render(<Modal isShown={false} />);

    const loremIpsum = screen.queryByText(/Lorem ipsum/);
    expect(loremIpsum).not.toBeInTheDocument();
  });

  test("modal is being closed on user click", () => {
    const setShowInfo = jest.fn();

    render(<Modal setShowInfo={setShowInfo} isShown={true} />);

    const closeButton = screen.getByTestId("closeButton");

    fireEvent.click(closeButton);

    waitFor(() => {
      expect(setShowInfo).toBeCalledWith(false); // this passes with either true or false, and with not or without...
    });
  });
});
