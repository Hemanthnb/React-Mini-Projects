import React from 'react'

export default function GetRandom({bgColor,getRandomNumber, randomNum}) {

    // return (
      //   <div className="flex-col content-center items-center  border-black bg-red-600">
      //     {/* <div className="text-center bg-gr"> */}
      //       <h1 className='text-center text-white'>Hello, World!</h1>
      //       <button className="bg-blue-500 text-white px-4 py-2 mt-4 items-center">Click me</button>
      //     {/* </div> */}
      //   </div>
      // );
  return (
    <div className={`flex justify-center items-center bg-${bgColor}-400 h-40`}>
    <div className='text-centre flex-col items-center justify-center' >
    <p>Random number is {randomNum}</p> 
    <button className='bg-blue-500 text-white p-2 rounded-md' onClick={getRandomNumber}>Get Random</button>
    </div>
    </div>
  )
}
