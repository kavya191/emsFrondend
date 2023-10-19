import React from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
function Tablecontent() {
    return (
        <div style={{height:"100vh"}}>
            <h2 className='text-center mt-5 fw-bold' style={{ color: '#2e466e' }} >List Of Employees</h2>
            <Container className='d-flex justify-content-center' style={{paddingRight:'370px',paddingLeft:'210px'}}>
                <Table striped bordered hover >
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
                        <tr>
                            <td style={{color:'#2e466e'}}>1</td>
                            <td style={{color:'#2e466e'}}>Mark</td>
                            <td style={{color:'#2e466e'}}>+919876543456</td>
                            <td style={{color:'white'}}>
                                <div className='bg-success text-center rounded w-100 p-2 text-dark'>Active</div>
                            </td>
                            <td style={{color:'#2e466e'}} className='d-flex justify-content-center' >
                                <img className='rounded-4' style={{width:'50px',height:'60px'}}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjZdDkDB9cH0OtpaW67OA6Gzulp6E-8eq3RZvypwE12zr1NpBv34pgUFtVeUPxcB0uU&usqp=CAU'></img>
                            </td>
                            <td style={{color:'#2e466e'}}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='w-100'>
                                  <i className='fa-solid fa-list-ul fa-fade'></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>


                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Tablecontent