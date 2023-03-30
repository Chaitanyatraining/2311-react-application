import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const data = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data.current.value)
    }

    useEffect(()=>{
        data.current.focus();
    })

  return (
    <>
    {/* 
        useState will re-render when the component change and update in UI.

        useRef doesn't notify you when its content changes,Mutating the (.current) property doesn.t cause a 
        re-render.
    */}
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 mt-3'>
                 <h2>UseRefHook</h2>
                 <form onSubmit={handleSubmit}>
                    <input ref={data} type="text" className='form-control my-4' placeholder='Enter your Name' />
                    <button className='btn btn-info mt-3'>Submit</button>
                 </form>
            </div>
            <div className='col-md-4'></div>
        </div>
        
    
    </div>        
    </>
  )
}

export default UseRefHook