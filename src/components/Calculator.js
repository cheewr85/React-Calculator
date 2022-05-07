import "./Calculator.css";

function Calculator() {
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
            <input id="remittance_input" type="number"></input> USD
          </p>
        </div>
        <div id="submit_container">
          <button id="submitBtn">Submit</button>
        </div>
      </form>
      {/* <p> 수취금액은 입니다.</p> */}
    </div>
  );
}

export default Calculator;
