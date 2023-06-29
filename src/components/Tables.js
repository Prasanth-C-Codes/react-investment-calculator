import React, { useState } from "react";

const Tables = (props) => {
  const [currency, setCurrency] = useState("INR");

  function handleCurrency(event) {
    setCurrency(event.target.value);
  }
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  //Table data in shown.
  // YEAR NUMBER
  // TOTAL SAVINGS END OF YEAR
  //INTEREST GAINED IN YEAR
  // TOTAL INTEREST GAINED
  // TOTAL INVESTED CAPITAL
  return (
    <div>
      <div className="selection">
        <select value={currency} onChange={handleCurrency}>
          <option value="INR">Indian Rupee (INR)</option>
          <option value="USD">US Dollar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">British Pound (GBP)</option>
        </select>
      </div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital (By year-end)</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((YearData) => {
            return (
              <tr key={YearData.year}>
                <td>{YearData.year}</td>
                <td>{formatter.format(YearData.savingsEndOfYear)}</td>
                <td>{formatter.format(YearData.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    YearData.savingsEndOfYear -
                      props.initialInvestment -
                      YearData.yearlyContribution * YearData.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    props.initialInvestment +
                      YearData.yearlyContribution * YearData.year
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Tables;
