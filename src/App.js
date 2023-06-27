//Description: Calculate capital, interest and savings (INR) gained for 'n' number of years using this project.

import { useState } from "react";
import Header from "./components/Header";
import Tables from "./components/Tables";
import Form from "./Form";

function App() {
  const [input, setInput] = useState(null);

  const calculateHandler = (input) => {
    setInput(input);
  };
  const yearlyData = []; // per-year results

  if (input) {
    let currentSavings = +input["current-savings"];
    const yearlyContribution = +input["yearly-contribution"];
    const expectedReturn = +input["expected-return"] / 100;
    const duration = +input["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalcualte={calculateHandler} />
      {!input && <p><span id="displays">No entries yet.</span></p>}
      {input && (
        <Tables
          tableData={yearlyData}
          initialInvestment={input["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
