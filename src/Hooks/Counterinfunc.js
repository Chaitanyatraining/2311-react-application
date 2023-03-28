import React, { useState } from 'react'

function Counterinfunc() {
       const [count,setCount] = useState(0);

       const incrementFunc = () =>{
        setCount(count+1);
       }

       const decrementFunc = () =>{
        setCount(count-1);
       }
  return (
    <div>
        <h2>UseState Hook</h2>
        <h3>Count : {count}</h3>
        <button className='btn btn-primary me-3' onClick={incrementFunc}>Increment</button>
        <button className='btn btn-warning me-3' onClick={decrementFunc}>Decrement</button>
    </div> 
  )
}

export default Counterinfunc