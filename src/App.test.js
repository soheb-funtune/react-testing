import { render, screen } from "@testing-library/react"; // npm test fileName => test specific file
import App from "./App"; // npm test => test all the files

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("checking name input box in app.js", () => {
  render(<App />);
  const inputEle = screen.getByRole("textbox"); // use textbox for input
  const placeholderText = screen.getByPlaceholderText(/Enter User Name/i);
  expect(inputEle).toBeInTheDocument();
  expect(inputEle).toHaveAttribute("id", "name");
  expect(placeholderText).toBeInTheDocument();
});

test("React Logo ", () => {
  render(<App />);
  const res = screen.getByTitle(/react logo/i);
  expect(res).toBeInTheDocument();
});

test("Checking SOHEB text in app.js :", () => {
  render(<App />);
  // const res = screen.getByText("SOHEB");    // this is Case sensitive
  const res = screen.getByText(/SOHEB/i); // not Case Sensitive
  expect(res).toBeInTheDocument();
});

// describe() is used for grouping test cases
// describe.only() with this we can run only this group of test cases
// describe.skip() with this we can screen perticular group of test cases

describe("UI test cases", () => {
  test("cheking name attribute of textbox", () => {
    render(<App />);
    const inputEle = screen.getByRole("textbox");
    expect(inputEle).toHaveAttribute("name", "userName");
  });
});
describe("API test cases", () => {
  test("cheking name attribute of textbox", () => {
    render(<App />);
    const inputEle = screen.getByRole("textbox");
    expect(inputEle).toHaveAttribute("name", "userName");
  });
});
