import React from 'react'
import Tablecontent from '../Components/Tablecontent'

function Manage() {
  return (
    <div>
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
      <Tablecontent></Tablecontent>


    </div>
  )
}

export default Manage