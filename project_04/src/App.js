import {  useState } from "react";
import "./App.css";
import InputBox from "./Components/Input";
import CurrencyConverter from "./hooks/CurrencyConverter";
function App() {
  const [fromCurrencyType, setFromCurrencyType] = useState("usd");
  const [toCurrencyType, setToCurrencyType] = useState("inr");
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const onChangeFromCurrencyType = (newFromCurrencyType) => {
    setFromCurrencyType(newFromCurrencyType);
  };

  const onChangeToCurrencyType = (newToCurrencyType) => {
    setToCurrencyType(newToCurrencyType);
  };

  const onChangeFromvalue = (value) => {
    setFromValue(value);
  };
  

  const data = CurrencyConverter(fromCurrencyType);
  const currencies = Object.keys(data);
  console.log(data);
  
  const convertCurrency = () => {
    setToValue(data[toCurrencyType] * fromValue);
  };


  const swapCurrencyType = () => {
    setToCurrencyType(fromCurrencyType);
    setFromCurrencyType(toCurrencyType);
  };

  return (
    <>
      <div className="flex ">
        <div className="md:flex-col mx-auto ">
          <InputBox
            labelName={"From"}
            currencies={currencies}
            currencyType={fromCurrencyType}
            onChangeType={onChangeFromCurrencyType}
            onChangeValue={onChangeFromvalue}
            value={fromValue}
          />
          <div className="flex justify-center py-0.5">
            <button
              className="px-5 py-2 rounded-md bg-blue-500 text-white absolute"
              onClick={swapCurrencyType}
            >
              swap
            </button>
          </div>
          <InputBox
            labelName={"To"}
            currencies={currencies}
            currencyType={toCurrencyType}
            onChangeType={onChangeToCurrencyType}
            value={toValue}
            readonly={"readOnly"}
          />
          <div className="flex justify-center">
            <button
              className=" bg-blue-500 rounded-md px-5 py-3 text-white"
              onClick={convertCurrency}
            >
              Convert {fromCurrencyType.toUpperCase()} to{" "}
              {toCurrencyType.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
