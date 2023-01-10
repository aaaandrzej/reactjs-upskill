import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders website name", () => {
  render(<App />);
  const siteNameOccurencies = screen.getAllByText("Księgowość Kogucik");
  siteNameOccurencies.forEach((siteName) => {
    expect(siteName).toBeInTheDocument();
  });
});
