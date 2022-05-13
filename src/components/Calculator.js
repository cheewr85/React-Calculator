import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [spanShow, setSpanShow] = useState(false);
  const [inputMoney, setInputMoney] = useState(0);

  const onClick = (e) => {
    e.preventDefault();
    setSpanShow(true);
  };

  const remittanceChange = (e) => {
    e.preventDefault();
    setInputMoney(e.target.value);
  };

  const selectChange = (e) => {
    e.preventDefault();
    setSpanShow(false);
  };

  return (
    <div id="calculator">
      <div id="header">
        <div className="nav">
          <span id="simple">Simple Calculator </span>
          <span id="tab">Tab Calculator</span>
        </div>
      </div>
      <h1>환율 계산</h1>
      <form id="calculatorForm">
        <div id="remittance_country" className="alignCenter">
          <p>송금국가: </p>
          <p>미국(USD)</p>
        </div>

        <div id="select_country" className="alignCenter">
          {/* <label id="countries_select">수취국가: </label> */}
          <p>수취국가: </p>
          <select
            name="countries"
            id="countries_select"
            className="alignCenter"
            onChange={selectChange} // onClick 이벤트는 박스를 누르자마자 실행 , onChange는 select option을 눌러야 실행
          >
            <option value="korea">한국(KRW)</option>
            <option value="japan">일본(JPY)</option>
            <option value="korea">필리핀(PHP)</option>
          </select>
        </div>
        <div id="exchange_rate" className="alignCenter">
          <p>환율: </p>
          <p>KRW/USD</p>
        </div>
        <div id="remittance" className="alignCenter">
          <p>송금액:</p>
          <p>
            <input
              id="remittance_input"
              type="number"
              onChange={remittanceChange}
            ></input>{" "}
            USD
          </p>
        </div>
        <div id="submit_container">
          <button id="submitBtn" onClick={onClick}>
            Submit
          </button>
        </div>
        {spanShow && (
          <span id="result_money">
            수취금액은 {inputMoney * 100} KRW입니다.
          </span>
        )}
      </form>
    </div>
  );
}

export default Calculator;
