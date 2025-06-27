import React, { useMemo, useState } from "react";
import { findPrimeFactor } from "../utils/helper";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

function Demo() {
  const [text, setText] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const prime = ()=>{
  //     console.log("Calculating prime factors...", text); //clk on btn again calculates
  //     return findPrimeFactor(text);
  // }

  // const prime = useMemo(()=> {
  //     console.log("Calculating prime factors...", text); //clk on btn ---> calculate again
  //     return findPrimeFactor(text);
  // });

  const prime = useMemo(() => {
    console.log("Calculating prime factors...", text); //clk on btn Does not calculate again
    return findPrimeFactor(text);
  }, [text]); //dependency array, if text changes then only it will recalculate
  return (
    <div className="flex justify-center items-center h-screen flex-wrap">
      <div
        className={
          "border border-black w-96 h-64 m-4 p-4 " +
          (isDarkMode && "bg-gray-800 text-white")
        }
      >
        <div>
          <h1 className="text-center font-bold underline text-blue-600">
            useMemo
          </h1>
          <h4 className="text-left text-sm px-2">
            <ul className="list-disc">
              <li>
                It caches the{" "}
                <span className="underline text-red-500">
                  result of calculation
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
          {/* <h4>Nth prime - {prime().join(', ')}</h4> */}
          <h4>Nth prime - {prime.join(", ")}</h4>
        </div>
      </div>
      <Demo2 />
      <Demo3 />
    </div>
  );
}

export default Demo;
