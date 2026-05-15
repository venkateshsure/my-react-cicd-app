import { render, screen } from "@testing-library/react";
import App from "./App";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
) as any;

test("renders heading text", () => {
  render(<App />);

  const text = screen.getByText(/get started/i);

  expect(text).toBeInTheDocument();
});
