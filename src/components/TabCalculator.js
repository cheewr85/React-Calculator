import React, { useEffect } from "react";
import { useState } from "react";
import Calculator from "./Calculator";
import "./Calculator.css";

function TabCalculator() {
  const [isTabCalCulator, setIsTabCalculator] = useState(true);
  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[today.getMonth()]; // getMonth : 원래 월의 -1 값으로 나옴 , 1~12월 : 0~11

  const changeSimpleCal = () => {
    setIsTabCalculator(false);
  };

  const changeTabCal = () => {
    setIsTabCalculator(true);
  };

  return (
    <>
      {isTabCalCulator ? (
        <div id="calculator">
          <div id="header">
            <div className="nav">
              <span id="simple" onClick={changeSimpleCal}>
                Simple Calculator{" "}
              </span>
              <span id="tab" onClick={changeTabCal}>
                Tab Calculator
              </span>
            </div>
          </div>
          <div className="tabCalculator_div">
            <form id="tabCalculator">
              <div className="tabCalculator_div_input">
                <input type="text"></input>
                <select>
                  <option value="USD">USD</option>
                  <option value="CAD">CAD</option>
                  <option value="KRW">KRW</option>
                  <option value="HKD">HKD</option>
                  <option value="JPY">JPY</option>
                  <option value="CNY">CNY</option>
                </select>
              </div>
              <div className="tabCalCulator_div_btn">
                <button>CAD</button>
                <button>KRW</button>
                <button>HKD</button>
                <button>JPY</button>
                <button>CNY</button>
              </div>
              <div className="tabCalCulator_div_currency">
                <span>
                  기준일 : {year}-{month}-{date}
                  {/* {today} */}
                </span>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Calculator />
      )}
    </>
  );
}

export default TabCalculator;
