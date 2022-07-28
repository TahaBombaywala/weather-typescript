import React from "react";
import {render, screen } from "@testing-library/react";
import ThirdForm from "../ThirdForm";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const mockweather = {
    location: {
    name:'New Delhi'
    },
    current: {
    condition: {text:'warm'},
    feelslike_c: 78 ,
    wind_kph:98 ,
    humidity: 9,
    pressure_in: 4556 
    }}

const MockThirdForm = () => {
  return (
    <BrowserRouter>
      <ThirdForm state= {mockweather}/>
    </BrowserRouter>
  );
};

describe("third form validation", () => {
  it("third form data ", async () => {
    render(<MockThirdForm/>);
    const divElement = screen.getByTestId("weather-data");
    expect(divElement.childElementCount).toBe(2);
    expect(divElement.childNodes).toBeTruthy();
  });
});
