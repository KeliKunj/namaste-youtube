import React, { useCallback, useState } from "react";
import { findPrimeFactor, isPrime } from "../utils/helper";

function Demo2() {
  const [text, setText] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const prime = ()=>{
  //     console.log("Calculating prime factors...", text); //clk on btn again calculates
  //     return findPrimeFactor(text);
  // }
//   const prime = () => {
//     console.log("Calculating prime factors...callback", text); //clk on btn ---> calculate again
//     const result = function getPrimeFactor(n = text) {
//       let result = [];
//       for (let i = 2; i < Math.pow(n, 0.5); i++) {
//         if (n % i == 0 && isPrime(i)) result.push(i);
//         if (n % i == 0 && isPrime(n / i)) result.push(n / i);
//       }
//       return result.sort((a, b) => a - b);
//     };
//     return result();
//   };

//   const prime = useCallback(() => {
//     console.log("Calculating prime factors...callback", text); //clk on btn ---> calculate again
//     const result = function getPrimeFactor(n = text) {
//       let result = [];
//       for (let i = 2; i < Math.pow(n, 0.5); i++) {
//         if (n % i == 0 && isPrime(i)) result.push(i);
//         if (n % i == 0 && isPrime(n / i)) result.push(n / i);
//       }
//       return result.sort((a, b) => a - b);
//     };
//     return result();
//   });
const result = useCallback(()=> function getPrimeFactor(n = text) {
      let result = [];
      for (let i = 2; i < Math.pow(n, 0.5); i++) {
        if (n % i == 0 && isPrime(i)) result.push(i);
        if (n % i == 0 && isPrime(n / i)) result.push(n / i);
      }
      return result.sort((a, b) => a - b);
    }, [text]);

  const prime = useCallback(() => {
    console.log("Calculating prime factors...callback", text); //clk on btn ---> No calculate again    
    return findPrimeFactor(text);
  }, [text]); //dependency array, if text changes then only it will recalculate
  

  return (
    <div
      className={
        "border border-black w-96 h-64 m-4 p-4 " +
        (isDarkMode && "bg-gray-800 text-white")
      }
    >
      <div>
        <h1 className="text-center font-bold underline text-blue-600">
          useCallback
        </h1>
        <h4 className="text-left text-sm px-2">
          <ul className="list-disc">
            <li>
              It caches the{" "}
              <span className="underline text-red-500">
                function definition
              </span>{" "}
              between re-renders.
            </li>
            <li>Memoizes the Heavy Operation.</li>
            <li>It optimizes the performance.</li>
          </ul>
        </h4>
      </div>
      <div className="mt-4">
        <button
          className="mx-[126px] p-2 rounded-xl bg-green-300"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="mt-4 mx-6">
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-black p-1 px-4 text-black"
        />
        <h4>Nth prime - {prime().join(", ")}</h4>
      </div>
    </div>
  );
}

export default Demo2;
