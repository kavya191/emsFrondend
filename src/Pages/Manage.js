import React, { useContext } from 'react'
import Tablecontent from '../Components/Tablecontent'
import { registerContext } from '../Components/ContextShare'
import { Alert } from 'react-bootstrap'
function Manage() {
  //access register context
  const {registerUpdate,setRegisterUpdate}=useContext(registerContext)
  return (
    <div>
        {registerUpdate ? (
        <Alert className='w-50 container p-3 mt-5' variant={"success"} dismissible onClose={() => setRegisterUpdate("")}>
          {registerUpdate} is added successfully
        </Alert>
      ) : (
        ""
      )}
      <div>
        
        <div class="input-group d-flex justify-content-center mt-5">
          
          <div id="search-autocomplete" class="form-outline">
            
            <input type="search" id="form1" class="form-control" label="search employee" placeholder="search employee" />
            
          </div>
          <button type="button" class="btn" style={{backgroundColor:"#2e466e",color:"white"}}>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <Tablecontent data={registerUpdate}></Tablecontent>


    </div>
  )
}

export default Manage