import React from "react";

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const Tables = (props) => {
  //Table data in shown.
  // YEAR NUMBER 
  // TOTAL SAVINGS END OF YEAR 
  //INTEREST GAINED IN YEAR 
  // TOTAL INTEREST GAINED 
  // TOTAL INVESTED CAPITAL 
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
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
                  {formatter.format(YearData.savingsEndOfYear -
                    props.initialInvestment -
                    YearData.yearlyContribution * YearData.year)}
                </td>
                <td>
                  {formatter.format(props.initialInvestment +
                    YearData.yearlyContribution * YearData.year)}
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
