import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders a Salam as a text", () => {
    // Arrange

    render(<Greeting />);

    // Act
    // - nothing as we are only checking if the component above is being rendered with the Salam -

    // Assert
    const salamElement = screen.getByText(`Assalaamu 'alaykum al-Ardh`);
    expect(salamElement).toBeInTheDocument;
  });

  test("renders Ahbaabi fillah as a text if button NOT clicked", () => {
    render(<Greeting />);

    const ahbaabElement = screen.getByText("Ahbaabi fill", { exact: false });
    expect(ahbaabElement).toBeInTheDocument;
  });

  test("renders Change if the button WAS clicked", () => {
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const changedElement = screen.getByText("Changed");
    expect(changedElement).toBeInTheDocument;
  });

  test("does not render Ahbaabi fillah if the button WAS clicked", () => {
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const changedElement = screen.queryByText("Ahbaab", { exact: false });
    expect(changedElement).toBeNull();
  });
});
