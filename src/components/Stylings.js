import React from 'react'
import './Styles.css'
import produStyles from './stylecomp.module.css'

function Stylings() {
    // inline 
    // Internal
    // external 
    // module css
    const Styles = {
        intStyles:{
            backgroundColor:"orange",
            padding:"20px",
            marginTop:"10px",
            color:"white"
        },
    }
  return (
    <div>
        <h2>Stylings</h2>
        {/* Inline stylings */}
        <h4 style={{backgroundColor:"red",padding:"20px",color:"white"}}>Inline stylings</h4>

        {/* Internal Stylings */}
        <h4 style={Styles.intStyles}>Internal Stylings</h4>

        {/* External stylings */}
        <h4 className="extprop">External Styles</h4>

        {/* module css */}
        <h4 className={produStyles.moducsshead}>Module Css</h4>
    </div>
  )
}

export default Stylings