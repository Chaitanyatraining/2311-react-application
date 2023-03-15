import React from 'react'

function ConditionalRender() {
    const age = 25;
    return(
    (age>=18) ?  (  <p>eligible</p> ): ( <p>not eligible</p>)
    )
//   return (
//     <div>
//         <h2>ConditionalRender</h2>
//     </div>
//   )

}

export default ConditionalRender