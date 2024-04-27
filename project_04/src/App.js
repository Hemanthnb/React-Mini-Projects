import { useState } from "react";
import "./App.css";
import InputBox from "./Components/Input";
import CurrencyConverter from "./hooks/CurrencyConverter";
import CountryCodes from "./constants/countryCodes";
function App() {
  const [fromCurrencyType, setFromCurrencyType] = useState(CountryCodes.USA);
  const [toCurrencyType, setToCurrencyType] = useState(CountryCodes.India);
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
  // console.log(data);

  const convertCurrency = () => {
    setToValue(data[toCurrencyType] * fromValue);
  };

  const swapCurrencyType = () => {
    // here there are multiple state updation inside a single event loop iteration
    setToCurrencyType(fromCurrencyType);
    setFromCurrencyType(toCurrencyType);
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="md:flex-col mx-auto p-16 rounded-md bg-gray-700/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}
          >
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
                // onClick={convertCurrency}
                type="submit"
              >
                Convert {fromCurrencyType.toUpperCase()} to{" "}
                {toCurrencyType.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
