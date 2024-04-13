import React from "react";
import { useState } from "react";
export default function Counter() {
    const[count, setCounter]= useState(0);

    const increment=()=>{
        setCounter(count+1);
        console.log(count);
    }
    const decrement=()=>{
        setCounter(count-1);
        console.log(count);
    }
    return(<>

    <div className=" w-36 mx-auto bg-blue-300 rounded-md p-32 flex-col justify-center items-center">
        <p className="text-center w-1/2 text-white mb-6">
            {count}
        </p>
        <div className="flex justify-center">
            <button className=" p-5 bg-red-600 mx-2 rounded-sm text-white text-lg" onClick={increment}>+</button>
            <button className="p-5 bg-green-400 rounded-sm text-xl text-white " onClick={decrement}>-</button>
        </div>
    </div>
    </>);
    
}