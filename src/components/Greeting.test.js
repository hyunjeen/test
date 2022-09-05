import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("test1", () => {
  test("Hello Test", () => {
    render(<Greeting />);
    const helloElement = screen.getByText("Hello World", { exact: false });
    expect(helloElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked!", () => {
    render(<Greeting />);
    const outputEl = screen.getByText("good to see you", { exact: false });
    expect(outputEl).toBeInTheDocument();
  });

  test("renders Change if the button was clicked", () => {
    render(<Greeting />);

    const btnEl = screen.getByRole("button");
    userEvent.click(btnEl);

    const ChangeOutput = screen.getByText("Change", { exact: false });
    expect(ChangeOutput).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    render(<Greeting />);

    const btnEl = screen.getByRole("button");
    userEvent.click(btnEl);

    const goodEl = screen.queryByText("good to see you", { exact: false });
    expect(goodEl).toBeNull();
  });
});
