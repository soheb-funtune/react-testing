import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "./text-field";

// beforeAll , beforeEach , afterAll, afterEach these are the JEST HOOKS

beforeAll(() => {
  console.log("This will execute Before All test cases");
});
beforeEach(() => {
  console.log("This will execute Before Each test cases");
});

test("first name Input test", () => {
  render(<TextField />);
  const firstNameEle = screen.getByRole("textbox");
  expect(firstNameEle).toBeInTheDocument();

  //  fireEvent.change() is used to check Input field change event
  fireEvent.change(firstNameEle, { target: { value: "soheb" } });
  expect(firstNameEle.value).toBe("soheb");
});

test("on click event checking", () => {
  render(<TextField />);
  const btnEle = screen.getByRole("button");
  fireEvent.click(btnEle);
  expect(screen.getByText("Soheb")).toBeInTheDocument();
});

afterEach(() => {
  console.log("this code will execute AFTER EACh Test cases");
});
afterAll(() => {
  console.log("this code will execute AFTER ALL Test cases");
});
