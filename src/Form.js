import React, { useState } from "react";

//Using 1 object instead of multiple state. Default state value.
const userInput = {
  "current-savings": 1000,
  "yearly-contribution": 12000,
  "expected-return": 7,
  duration: 10,
};

const Form =(props)=> {
  //Declaring state.
  const [input, setInput] = useState(userInput);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalcualte(input); //passing input state to App.js using calculate function. This ensures that the form values are passed on everytime we click submit; to the app.js
  };
  function resetHandler() {
    //default values on reset.
    setInput(userInput);
  }
  const inputChangeHandler = (inputid, value) => {
    //update state for input textboxes.
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputid]: value,
      };
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(e) =>
                inputChangeHandler("current-savings", e.target.value)
              }
              type="number"
              value={input["current-savings"]}
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(e) =>
                inputChangeHandler("yearly-contribution", e.target.value)
              }
              type="number"
              value={input["yearly-contribution"]}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(e) =>
                inputChangeHandler("expected-return", e.target.value)
              }
              type="number"
              value={input["expected-return"]}
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(e) => inputChangeHandler("duration", e.target.value)}
              type="number"
              value={input["duration"]}
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default Form;
