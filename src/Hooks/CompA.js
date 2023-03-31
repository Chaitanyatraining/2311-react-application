import React from 'react'
import { CompB } from './CompB';
import { CompC } from './CompC';

export const userContext = React.createContext();

export const CompA = () => {

  return (
    <div>
        <h2>CompA</h2>
        <userContext.Provider value={"3 months"}>
            <CompC />
        </userContext.Provider>
    </div>
    
  )
}
