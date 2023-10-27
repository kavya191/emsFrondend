import React, { useState } from 'react'
//import context hook
import { createContext } from 'react'

//create context and export it
export const registerContext=createContext()
export const manageContext=createContext()
function ContextShare({children}) {
    //create state for registercontext
    const [registerUpdate,setRegisterUpdate]=useState("")
    const [employeeUpdate,setEmployeeUpdate]=useState([])
  return (
    <div>
        <registerContext.Provider value={{registerUpdate,setRegisterUpdate,employeeUpdate,setEmployeeUpdate}}>
            {children}
        </registerContext.Provider>
    </div>
  )
}

export default ContextShare