import React from 'react'
import { Consumer } from './ContextAPI'

function ParentComponent() {
  return (
    <div>
        <CONTEXT_API_C />
    </div>
  )
}

const CONTEXT_API_C = ()=>{
    return(
        <CONTEXT_API_D />
    )
}

const CONTEXT_API_D = ()=>{
    return(
        <CONTEXT_API_F />
    )
}
const CONTEXT_API_F = ()=>{
    return(
        <>
             <h2>Conponet F</h2>
            <Consumer>
                {
                   (value)=>{
                        return <div>
                            <h2>Context from component F - {value.user.firstName}</h2>
                            <h2>Context from component F - {value.user.lastName}</h2>
                            <h2>Context from component F - {value.user.email}</h2>
                            <p>Context from component F - {value.lists[0]}</p>
                        </div>
                   }
                }
            </Consumer>
        </>
    )
}

export default ParentComponent