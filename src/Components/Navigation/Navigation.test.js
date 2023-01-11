import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";

test("navbar renders website name", () => {
  render(
    <Router>
      <Navigation routes={{}} />
    </Router>
  );
  const siteNameOccurencies = screen.getAllByText("Księgowość Kogucik");
  siteNameOccurencies.forEach((siteName) => {
    expect(siteName).toBeInTheDocument();
  });
});
