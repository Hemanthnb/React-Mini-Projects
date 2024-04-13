import React, { useState, useEffect } from "react";

export default function ChangeColors() {
  const [color, setColor] = useState("white");
  const changeColor = (event) => {
    const buttonText = event.target.innerText.toLowerCase();
    setColor(buttonText);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div className=" absolute bottom-0 w-full p-4 flex justify-center items-center">
        <div className=" mx-auto w-2/3  bg-orange-200 p-4  rounded-md">
          <div className="flex justify-between">
            <button
              className=" bg-red-600  px-4 py-3 rounded-md"
              onClick={changeColor}
            >
              Red
            </button>
            <button
              className=" bg-blue-600 px-4 py-3 rounded-md"
              onClick={changeColor}
            >
              Blue
            </button>
            <button
              className=" bg-green-600 px-4 py-3 rounded-md"
              onClick={changeColor}
            >
              Green
            </button>
            <button
              className=" bg-yellow-600 px-4 py-3 rounded-md"
              onClick={changeColor}
            >
              Yellow
            </button>
            <button
              className=" bg-blue-200 px-4 py-3 rounded-md"
              onClick={changeColor}
            >
              Lavender
            </button>
            <button
              className=" bg-gray-400 px-4 py-3 rounded-md"
              onClick={changeColor}
            >
              Grey
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
