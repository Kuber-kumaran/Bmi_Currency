import React, { useEffect, useState } from "react";
import money from "../../src/Assets/images/Currency.jpeg";
import axios from "axios";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        console.log(res);
        setExchangeRate(res.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
    getExchangeRate();
  },[fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(3));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  }

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };
  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };
  

  return (
    <>
      <div>
        <div className="currency-converter w-96 bg-green-500 rounded-md py-2 px-4">
          <div className="box w-[100%] p-4 ">
            <img src={money} className="h-60 w-full rounded-full" alt="Money" />
          </div>
          <div className="data">
            <h1 className="text-yellow-400 text-lg font-bold py-2 mb-4 text-center border-y border-dashed ">
              CURRENCY CONVERTER
            </h1>
            <div className="input-container mb-2">
              <label
                htmlFor="amt"
                className="block mb-1 text-zinc-600 font-normal"
              >
                Amount:
              </label>
              <input
                type="number"
                className="w-full  p-2 mb-2 rounded font-normal border-2 outline-none focus-visible:border-cyan-500"
                name=""
                id="amt"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="input-container mb-2">
              <label
                htmlFor="fromCurrency"
                className="block mb-1 text-zinc-600 font-normal "
              >
                From Currency:
              </label>
              <select
                id="fromCurrency"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
                className="w-full  p-2 mb-2 rounded font-normal border-2 outline-none focus-visible:border-cyan-500"
              >
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
            <div className="input-container mb-2">
              <label
                htmlFor="toCurrency"
                className="block mb-1 text-zinc-600 font-normal"
              >
                To Currency:
              </label>
              <select
                id="toCurrency"
                value={toCurrency}
                onChange={handleToCurrencyChange}
                className="w-full  p-2 mb-2 rounded font-normal border-2 outline-none focus-visible:border-cyan-500"
              >
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
            <div className="result mt-3 p-2 border border-white-500  rounded border-dashed ">
              <p className="p-1 font-semibold text-center text-yellow-400">
                {amount} {fromCurrency} is equal to {convertedAmount}
                 {toCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
