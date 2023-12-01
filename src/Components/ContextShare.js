import React, { useState } from 'react'
//import context hook
import { createContext } from 'react'

//create context and export it
export const registerContext=createContext()
//update context for update
export const updateContext=createContext()

function ContextShare({children}) {
    //create state for registercontext
    const [registerUpdate,setRegisterUpdate]=useState("")
    //create context for update employee context
    const [updateStatus,setUpdateStatus]=useState("")
  
  return (
    <div>
      <updateContext.Provider value={{updateStatus,setUpdateStatus}}>
      <registerContext.Provider value={{registerUpdate,setRegisterUpdate}}>
            {children}
        </registerContext.Provider>
      </updateContext.Provider>
    
    </div>
  )
}

export default ContextShare