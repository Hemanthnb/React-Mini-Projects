import React, { useState, useEffect, useCallback, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);

  const passwordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (specialCharacter) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  /*
    Using Callback hooks to Optimise the performance
  const passwordGenerator = useCallback( () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (number) str += "0123456789"
      if (specialCharacter) str += "!@#$%^&*-_+=[]{}~`"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)

      }

      setPassword(pass)
  },
  [length,number,specialCharacter]
  )
  */

  const handleInputChange = (e) => {
    setLength(e.target.value);
  };

  const allowNumbers = () => {
    setNumber((prev) => !prev);
  };

  const allowSpecialCharacter = () => {
    setSpecialCharacter((prev) => !prev);
  };

  useEffect(() => {
    passwordGenerator();
  }, [number, length, specialCharacter]);

  /*
  Using Naive method
  const copyText=()=>{
      let textValue=document.getElementById('password');
      textValue.select();
      navigator.clipboard.writeText(textValue.value);
  }
  */

  //using use ref hook

  const passwordRef = useRef(null);
  const copyText = () => {
    passwordRef.current.select();
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="sm:flex justify-center items-center">
    <div className=" p-14 bg-gray-500 md:flex-col rounded-sm">
      <h2 className="text-center mb-5 text-white font-semibold text-lg">Password Generator</h2>
      <div className="sm:flex p-3 w-full justify-between">
        <input
          type="text"
          id="password"
          readOnly
          className="text-center rounded-sm w-2/3 p-3"
          value={password}
          ref={passwordRef}
        />
        <button className=" bg-blue-500 p-3 rounded-s text-white" onClick={copyText}>
          copy
        </button>
      </div>
      
      <div>
        <input
          type="range"
          title="slider"
          name="sample"
          min="1"
          max="100"
          id="myRange"
          value={length}
          onChange={handleInputChange} 
        />
        <label className="mr-3">{length}</label>
        <input
          type="checkbox"
          defaultChecked={number}
          onChange={() => {
            if (number === true) {
              setNumber(false);
            } else {
              setNumber(true);
            }
          }}
        />
        <label> Number &nbsp;</label>
        <input
          type="checkbox"
          defaultChecked={specialCharacter}
          onChange={() => {
            setSpecialCharacter((prev) => !prev);
          }}
        />
        <label> Special Character</label>
      </div>
    </div>
    </div>
  );
}
