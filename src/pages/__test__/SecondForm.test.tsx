import React from "react";
import {render, screen } from "@testing-library/react";
import SecondForm from "../SecondForm";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockSecondForm = () => {
  return (
    <BrowserRouter>
      <SecondForm />
    </BrowserRouter>
  );
};

describe("second form validation", () => {
  it("button should be disables when user does not type any data to the input field. ", async () => {
    render(<MockSecondForm />);
    const divElement = screen.getByTestId("result-map");
    expect(divElement.childElementCount).toBe(5);
    expect(divElement.childNodes).toBeTruthy();
  });
});
