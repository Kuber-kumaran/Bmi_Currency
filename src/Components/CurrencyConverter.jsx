import React from "react";
import money from '../../src/Assets/images/Currency.png';


const CurrencyConverter = () => {
  return (
    <>
      <div>
        <div className="currency-converter w-96 bg-green-500 rounded-md py-2 px-4">
          <div className="box w-[100%] p-4 ">
          <img src={money} alt="Money"  />

          </div>
          <div className="data">
            <h1 className="text-yellow-400 text-lg font-bold py-2 mb-4 text-center border-y border-dashed ">CURRENCY CONVERTER</h1>
            <div className="input-container">
              <label htmlFor="amt">Amount:</label>
              <input type="number" name="" id="amt" />
            </div>
            <div className="input-container">
              <label htmlFor="fromCurrency">From Currency:</label>
              <select id="fromCurrency">
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japnese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Dollar</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="toCurrency">To Currency:</label>
              <select id="toCurrency">
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japnese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Dollar</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
            <div className="result">
              <p>1 USD is equal to 83.25 INR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter;
