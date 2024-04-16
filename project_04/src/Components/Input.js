import React from "react";

export default function InputBox({
  labelName,
  currencies = [],
  onChangeType,
  currencyType='usd',
  readOnly=null,
  onChangeValue,
  value=0,
}) {
  // const currencies= Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
  // console.log(currencies)
  return (
    <>
      <div className="flex justify-evenly items-center">
        <div className="flex-col justify-center items-center">
          <label htmlFor="amount" className="block text-gray-400 font-medium">
            {labelName}
          </label>
          <input
            className="p-4"
            id="amount"
            placeholder="Enter currency"
            type="number"
            value={value}
            onChange={(event) => onChangeValue(event.target.value)}
            // readOnly={readOnly?'readOnly':null}
          />
        </div>

        <div>
          <label htmlFor="currencyType" className="block text-gray-400 mb-3">
            Currency Type
          </label>
          <select
          className=" bg-gray-100 border  rounded py-2 max-h-20 overflow-y-auto mb-4"
            id="currencyType"
            value={currencyType}
            onChange={(event) => onChangeType(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}

            {/* {currencies.map((key, index) => (
              <option key={index} value={key}>{key}</option>
            ))} */}
            {/* <option>hello</option>
            <option>hi</option>
            <option>hi</option>
            <option>hi</option>
            <option>hi</option>
            <option>hi</option>
            <option>hi</option> */}
          </select>
        </div>
      </div>
    </>
  );
}
