import React, { useEffect } from "react";
import { useState } from "react";
import Calculator from "./Calculator";
import "./Calculator.css";

const apiData = {
  success: true,
  terms: "https://currencylayer.com/terms",
  privacy: "https://currencylayer.com/privacy",
  timestamp: 1545881647,
  source: "USD",
  quotes: {
    USDCAD: 1.359085,
    USDKRW: 1121.419945,
    USDHKD: 7.83205,
    USDJPY: 110.959498,
    USDCNY: 6.891597,
  },
};

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
  const [tabCal_input, setTabCal_input] = useState(0);
  const [selected_remittance, setSelected_remittance] = useState("USD");
  const [remittance_dropdown, setRemittance_dropdown] = useState([
    "USD",
    "CAD",
    "KRW",
    "HKD",
    "JPY",
    "CNY",
  ]);
  const remittance_btn = remittance_dropdown.filter(
    (item) => item !== selected_remittance
  );
  //   const [remittance_btn, setRemittance_btn] = useState(remittance_btn_filter);
  const [currency_remittance, setCurrency_remittance] = useState("CAD");
  const [show_remittance, setShow_remittance] = useState(0);

  function comma(obj) {
    var regx = new RegExp(/(-?\d+)(\d{3})/);
    var bExists = obj.indexOf(".", 0); //0번째부터 .을 찾는다.
    var strArr = obj.split(".");
    while (regx.test(strArr[0])) {
      //문자열에 정규식 특수문자가 포함되어 있는지 체크
      //정수 부분에만 콤마 달기
      strArr[0] = strArr[0].replace(regx, "$1,$2"); //콤마추가하기
    }
    if (bExists > -1) {
      //. 소수점 문자열이 발견되지 않을 경우 -1 반환
      obj = strArr[0] + "." + strArr[1];
    } else {
      //정수만 있을경우 //소수점 문자열 존재하면 양수 반환
      obj = strArr[0];
    }
    return obj; //문자열 반환
  }

  const changeSimpleCal = () => {
    setIsTabCalculator(false);
  };

  const changeTabCal = () => {
    setIsTabCalculator(true);
  };

  const tabCal_input_change = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (value >= 0 && value <= 1000) {
      setTabCal_input(value);
    } else if (value > 1000) {
      setTabCal_input(1000);
    }
  };

  const selectOnchange = (e) => {
    setSelected_remittance(e.target.value);
  };

  const btn_onClick = (e) => {
    e.preventDefault();

    setCurrency_remittance(e.target.value);
  };

  useEffect(() => {
    if (currency_remittance) {
      let apiMoney = apiData.quotes["USD" + currency_remittance];

      let toFixedMoney = Number(apiMoney);
      toFixedMoney = (toFixedMoney * tabCal_input).toFixed(2);

      // setShow_remittance(toFixedMoney);

      const removedCommaMoney = comma(toFixedMoney);
      setShow_remittance(removedCommaMoney);
    }
  }, [currency_remittance, show_remittance, tabCal_input]);

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
                <input
                  type="text"
                  value={tabCal_input}
                  onChange={tabCal_input_change}
                ></input>
                <select onChange={selectOnchange}>
                  {/* <option value="USD">USD</option>
                  <option value="CAD">CAD</option>
                  <option value="KRW">KRW</option>
                  <option value="HKD">HKD</option>
                  <option value="JPY">JPY</option>
                  <option value="CNY">CNY</option> */}
                  {remittance_dropdown.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="tabCalCulator_div_btn">
                {/* <button>CAD</button>
                <button>KRW</button>
                <button>HKD</button>
                <button>JPY</button>
                <button>CNY</button> */}
                {remittance_btn.map((item) => {
                  return (
                    <button key={item} value={item} onClick={btn_onClick}>
                      {item}
                    </button>
                  );
                })}
              </div>
              <div className="tabCalCulator_div_currency">
                <h3>
                  {currency_remittance} : {show_remittance}
                </h3>
                <span>
                  기준일 : <br></br>
                </span>
                <span>
                  {year}-{month}-{date}
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
