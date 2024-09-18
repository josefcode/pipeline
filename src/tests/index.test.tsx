import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText("Welcome atef to the new age !!!!");
    expect(heading).toBeInTheDocument();
  });
});
