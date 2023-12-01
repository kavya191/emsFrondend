import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import BASE_URL from '../services/base_url';
import { Link } from 'react-router-dom';
import { Edit, Eye, Trash2 } from 'react-feather';
import '../Components/style.css'
function Tablecontent({empArray,deleteEmp}) {
    return (
        <div style={{height:"100vh"}}>
            <h2 className='text-center mt-5 fw-bold' style={{ color: '#2e466e' }} >List Of Employees</h2>
            

            
        
                 <Container className='d-flex justify-content-center' >
                    
                    {
                        empArray.length>0?(
                        <Table  className='emptable' striped bordered hover style={{paddingRight:'300px',paddingLeft:'210px'}} >
                     <thead>
                         <tr>
                             <th style={{color:'#2e466e'}}>#</th>
                             <th style={{color:'#2e466e'}}>Full Name</th>
                             <th style={{color:'#2e466e'}}>Mobile</th>
                             <th style={{color:'#2e466e'}}>Status</th>
                             <th style={{color:'#2e466e'}}>profile</th>
                             <th style={{color:'#2e466e'}}>Actions</th>
                         </tr>
                     </thead>
                   
                        
                            <tbody style={{backgroundColor:"whitesmoke"}}>
                                {
                                empArray.map((i,index)=>
                                             <tr>
                                             <td style={{color:'#2e466e'}}>{index+1}</td>
                                             <td style={{color:'#2e466e'}}><b>{i.fname+" "+i.lname}</b></td>
                                             <td style={{color:'#2e466e'}}>{i.mobile}</td>
                                             <td style={{color:'white'}}>
                                                 <Button variant={i.status=="active"?"info":"warning"} className=' text-center rounded w-100 p-2 text-dark'>{i.status}</Button>
                                             </td>
                                             <td style={{color:'#2e466e'}} className='d-flex justify-content-center' >
                                                 <img className='rounded-4' style={{width:'50px',height:'60px'}}
                                                     src={`${BASE_URL}/uploads/${i.profile}`}></img>
                                             </td>
                                             <td style={{color:'#2e466e'}}>
                                                 <Dropdown>
                                                     <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='w-100'>
                                                   <i className='fa-solid fa-list-ul fa-fade'></i>
                                                     </Dropdown.Toggle>
                 
                                                     <Dropdown.Menu>
                                                        <Link to={`/view/${i._id}`} className='text-decoration-none'>
                                                        <Dropdown.Item href='#1' ><Eye></Eye>View</Dropdown.Item></Link>
                                                      <Link to={`/edit/${i._id}`} className='text-decoration-none'>
                                                      <Dropdown.Item  href='#2'><Edit></Edit>Edit</Dropdown.Item>
                                                      </Link>
                                                        
                                                        <Dropdown.Item  onClick={()=>{deleteEmp(i._id)}} href='' ><Trash2></Trash2> Delete</Dropdown.Item>
                                                     </Dropdown.Menu>
                                                 </Dropdown>
                                             </td>
                                         </tr>
                 
                                )}
                   
    
                        </tbody>
                  
                  
                 </Table>):<h1>No Data Found!</h1>

                        
                    }
             
                 
             </Container>
         
        
            
           
        </div>
    )
}

export default Tablecontent