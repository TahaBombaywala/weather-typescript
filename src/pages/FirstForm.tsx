import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const FirstForm :React.FC<{}> = () => {
  //   const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  //
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError("");
    }
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event:React.FormEvent) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    // setEnteredName("");
    setEnteredNameTouched(false);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const apiHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v2/name/${enteredName}?fullText=true`
      );
      if (!response.ok) {
        throw new Error("Country Not Found!!!");
      }
      const data = await response.json();
      console.log(data);
      
      setIsLoading(false);
      navigate("/secondform", { state: data[0] });
    } catch (error) {
      setError("Country Not Found!!!");
      setIsLoading(false);
    }
    // console.log(data[0])
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <h2>
          <label htmlFor="country">PREFERRED COUNTRY</label>
        </h2>
        <input
          //   ref={nameInputRef}
          type="text"
          id="country"
          placeholder="Enter Country!!"
          onChange={nameInputChangeHandler}
          onBlur={() => setEnteredNameTouched(true)}
          // value={enteredName}
          autoComplete="off"
        />
        <div>
          {isLoading && <p>loading.....</p>  }
        </div>
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      {error && <p className="error-text">{error}</p>}

      <div className="form-actions">
        <button disabled={!formIsValid} onClick={apiHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FirstForm;
