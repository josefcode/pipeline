import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByAltText("Next.js logo");
    expect(heading).toBeInTheDocument();
  });
});
