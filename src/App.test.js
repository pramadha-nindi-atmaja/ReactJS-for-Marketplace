import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render the 'learn react' link", () => {
    render(<App />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  });
});
