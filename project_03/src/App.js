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
    <div className=" w-1/2 mx-auto bg-gray-500 border-green-200 h-40 flex flex-col items-center">
      <h2 className="text-center mb-5">Password Generator</h2>
      <div>
        <input
          type="text"
          id="password"
          readOnly
          className="text-center mb-10 h-10 p-1"
          value={password}
          ref={passwordRef}
        />
        <button className="w-16 h-10 ml-2 bg-red-500" onClick={copyText}>
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
  );
}
