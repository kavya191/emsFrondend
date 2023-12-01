import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function AdminHeader() {
  return (
    <div style={{backgroundColor:"#2e466e"}}>
    <Nav
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
    <Nav.Item style={{textDecoration:"none"}} >
      <a style={{textDecoration:"none"}} className='text-white ms-3  ' href="/">Home</a>
    </Nav.Item>
  
    <Nav.Item>
      <a className='text-white ms-3' style={{textDecoration:"none"}} href="/add">Add Employee</a>
    </Nav.Item>
   
    <Nav.Item>
      <a className='text-white ms-3'  style={{textDecoration:"none"}} href="/manage">List  Employees</a>
    </Nav.Item>
   
  </Nav>
  </div>
  )
}

export default AdminHeader