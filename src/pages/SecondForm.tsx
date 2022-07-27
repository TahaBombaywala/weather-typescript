import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../index.css";

type CountryDataType = {
  name: string;
  capital: string;
  population: number;
  latlng: [number,number];
  flag: string;
  children?: React.ReactNode;
 };
// type dataType ={
//   country : {CountryDataType}
// }
const SecondForm= () => {

  let location = useLocation();
  
  const data = location.state as CountryDataType;
  
  
  console.log("second -- ",data);
  

  let navigator = useNavigate();

  const weatherDataHandler = async () => {
    console.log("hshshh");
    
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=96b9d65269204ec38a1145038222307&q=${data.capital}&aqi=no`
    );
    const weather = await response.json();

    console.log('weather -- ' , weather);

    navigator("/thirdform", { state: weather });
  };
  useEffect(() => {
    if (data === null) {
      navigator("/");
    }
  },[]);

  return (
    <div>
      <h2 text-align="center"> Capital : {data?.capital}</h2>
      <h2 text-align="center"> Population : {data?.population}</h2>
      <h2 text-align="center">
        Latitude : {data?.latlng[0]} , Longitude : {data?.latlng[1]}
      </h2>
      <div>
        <img
          style={{ width: "20rem", height: "10rem", objectFit: "cover" }}
          src={data?.flag} alt=""
        ></img>
      </div>

      <div className="form-actions">
        <button onClick={weatherDataHandler}>GET CAPITAL WEATHER</button>
      </div>
    </div>
  );
};

export default SecondForm;
