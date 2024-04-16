import { useState } from "react";
import "./App.css";
import InputBox from "./Components/Input";
import CurrencyConverter from "./hooks/CurrencyConverter";
function App() {
  const [fromCurrencyType, setFromCurrencyType] = useState("usd");
  const[toCurrencyType, setToCurrencyType]= useState('inr');
  const [fromValue,setFromValue]=useState(0);
  const [toValue,setToValue]=useState(0);

  const onChangeFromCurrencyType=(newFromCurrencyType)=>{
    console.log(newFromCurrencyType);
    setFromCurrencyType(newFromCurrencyType);
  }

  const onChangeToCurrencyType=(newToCurrencyType)=>{
    setToCurrencyType(newToCurrencyType);
  }

  const onChangeFromvalue=(value)=>{
      setFromValue(value);
  }


  const data = CurrencyConverter(fromCurrencyType);

  const convertCurrency=()=>{

  }


  const currencies=Object.keys(data);
  console.log(currencies)
  return (
    <>
      <div className=" flex-col bg-white p-6 justify-center w-1/3 mx-auto items-center">
        <InputBox labelName={'From'} currencies={currencies}  currencyType={fromCurrencyType} onChangeType={onChangeFromCurrencyType} onChangeValue={onChangeFromvalue} value={fromValue}/>
        <InputBox labelName={'To'} currencies={currencies} currencyType={toCurrencyType} onChangeType={onChangeToCurrencyType} />
      </div>
    </>
  );
}

export default App;
