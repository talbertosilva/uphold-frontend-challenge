import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("Should render all three menu options", () => {
    render(<Header />);
    const texts = [
      screen.getByText(/Personal/i),
      screen.getByText(/Business/i),
      screen.getByText(/Partners/i),
    ];

    texts.forEach((textElement) => {
      expect(textElement).toBeInTheDocument();
    });
  });

  it("Should render login button", () => {
    render(<Header />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
