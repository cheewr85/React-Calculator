import React, { useEffect } from "react";
import { useState } from "react";
import "./Calculator.css";
import axios from "axios";
import { async } from "q";

const apiData = {
  success: true,
  terms: "https://currencylayer.com/terms",
  privacy: "https://currencylayer.com/privacy",
  timestamp: 1545881647,
  source: "USD",
  quotes: {
    USDKRW: 1121.419945,
    USDPHP: 52.72027,
    USDJPY: 110.959498,
  },
};

function Calculator() {
  const [spanShow, setSpanShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [inputMoney, setInputMoney] = useState(0);
  const [resultMoney, setResultMoney] = useState(0);
  const [currency, setCurrency] = useState({});
  const [currencyMoney, setCurrencyMoney] = useState(0);
  const [currencyOption, setCurrencyOption] = useState("KRW");

  const onClick = (e) => {
    e.preventDefault();
    if (inputMoney < 0 || inputMoney === "" || inputMoney > 10000) {
      setErrorShow(true);
      setSpanShow(false);
    } else {
      const removedCommaValue = Number(inputMoney * currencyMoney);
      const commaMoney = removedCommaValue.toLocaleString();

      setResultMoney(commaMoney);

      setSpanShow(true);
      setErrorShow(false);
    }
  };

  const remittanceChange = (e) => {
    e.preventDefault();
    const remittanceMoney = e.target.value;
    setInputMoney(remittanceMoney);

    setSpanShow(false);
    setErrorShow(false);
  };

  const selectChange = (e) => {
    e.preventDefault();
    setCurrencyOption(e.target.value);

    setSpanShow(false);
    setErrorShow(false);
  };

  useEffect(() => {
    // var myHeaders = new Headers();
    // myHeaders.append("apikey", "nVoExPZQL8IOvQBHcywsBdMgPjgWKYD8");

    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    //   headers: myHeaders,
    // };

    // fetch("https://api.apilayer.com/currency_data/live?", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     setCurrency(result.quotes);
    //     console.log(currency);
    //     console.log(result.quotes);
    //   })
    //   .catch((error) => console.log("error", error));

    if (currencyOption) {
      setCurrencyMoney(apiData.quotes["USD" + currencyOption]);
      console.log(currencyMoney);
    }
  }, [currencyOption]);

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
            <option value="KRW">한국(KRW)</option>
            <option value="JPY">일본(JPY)</option>
            <option value="PHP">필리핀(PHP)</option>
          </select>
        </div>
        <div id="exchange_rate" className="alignCenter">
          <p>환율: </p>
          <p>
            {currencyMoney} {currencyOption}/USD
          </p>
        </div>
        <div id="remittance" className="alignCenter">
          <p>송금액:</p>
          <p>
            <input
              id="remittance_input"
              type="text"
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
          <p id="result_money">
            수취금액은 {resultMoney} {currencyOption}입니다.
          </p>
        )}
        {errorShow && <p id="error_money">송금액이 바르지 않습니다.</p>}
      </form>
    </div>
  );
}

export default Calculator;
