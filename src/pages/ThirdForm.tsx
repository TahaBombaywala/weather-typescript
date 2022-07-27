import React from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "../components/MainHeader";

type WeatherStateType = {
  location: {
  name: string,
  country?: string,
  },
  current: {
  condition: {text:string},
  feelslike_c: number,
  wind_kph: number,
  humidity: number,
  pressure_in: number  
  }
};

const ThirdForm = () => {
  let locator = useLocation();
  const wData = locator.state as WeatherStateType;

  const tempData = wData.current;
  console.log(tempData);

  return (
    <div>
      <MainHeader />
      <div>
        <h1> {wData.location.name} Weather </h1>
        <h2> Climate : {tempData?.condition?.text}</h2>
        <h2> Temperature : {tempData?.feelslike_c} °C</h2>
        <h2> Wind Speed : {tempData?.wind_kph} in Kph</h2>
        <h2> Humidity : {tempData?.humidity}</h2>
        <h2> Atmospheric Pressure : {tempData?.pressure_in} inches </h2>
      </div>
    </div>
  );
};

export default ThirdForm;
