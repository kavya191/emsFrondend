import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='w-100'>
        <Navbar  style={{backgroundColor:'#2e466e'}}>
        <Container >
          <Navbar.Brand className='text-white fw-bold' href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/y81kMxG8/Mitarbeiter.gif"
              width="50"
              height="40"
              className="d-inline-block align-top pt-1"
            />{' '}
            <b className='fs-2 text-white'>Employee Desk</b>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header