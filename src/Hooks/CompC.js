import React from 'react'
import { userContext } from './CompA'

export const CompC = () => {
  return (
    <div>
        <h2>CompC</h2>
        <userContext.Consumer>
            {value => <div>Course duration : {value}</div>}
        </userContext.Consumer>
    </div>
  )
}
