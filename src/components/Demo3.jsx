import React from 'react'

const Demo3 = () => {
    let x  = 0;
    const [y, setY] = React.useState(0);
    const ref = React.useRef(0);
  return (
    <div className='border border-black w-96 h-96 pt-4 p-2 m-4 pb-4'>
        <h1 className='text-center font-bold underline text-blue-600'>useRef</h1>
        <ul className='list-disc text-left text-sm px-2 pl-4'>
            <li>It is used to access DOM elements directly.</li>
            <li>It can hold a mutable value that <span className='underline text-red-600'>does not cause re-render</span> when changed. As it takes the <span  className='underline text-green-600'>reference of the value(DOM nodes) NOT Value</span></li>            
            <li>It does not trigger a re-render.</li>
            <li>Useful for performance optimization.</li>
        </ul>
        <div className='mt-4 mx-6 flex flex-col items-center justify-center'>
            <div className='flex items-center'>
                <h3>Let x = {x}</h3>
                <button className='p-2 mx-4 rounded-xl bg-green-300' 
                        onClick={()=>{x++; console.log("x: ", x)}}>Increment x </button>
            </div>
            <div className='flex items-center mt-4'>
                <h3>State y = {y}</h3>
                <button className='p-2 mx-4 rounded-xl bg-green-300' 
                        onClick={()=>{setY(y+1); console.log("y: ", y)}}>Increment y </button>
            </div>
            <div className='flex items-center mt-4'>
                <h3>State ref = {ref.current}</h3>
                <button className='p-2 mx-4 rounded-xl bg-green-300' 
                        onClick={()=>{ref.current = ref.current + 1; console.log("ref: ", ref.current)}}>Increment ref </button>
            </div>
        </div>
    </div>
  )
}

export default Demo3