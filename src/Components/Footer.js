import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div style={{ backgroundColor: '#2e466e' }}>
      <Container  className='text-center '>
        <Row >
          <Col lg={4} >
            <img
              alt=""
              src="https://i.postimg.cc/y81kMxG8/Mitarbeiter.gif"
              width="40"
              height="40"
              className="pb-1"
            />{' '}
            <b className='fs-1 text-white mt-3'>  Employee Desk</b>
            <p  className='text-white p-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus ad at eos illum magnam optio, est nisi! Odit laboriosam eos facere cum laborum nihil maiores necessitatibus. Quas, unde. Tempore.</p>
          </Col>
          <Col lg={4}  >
            <h2 className='text-white text-center mt-4'>Contact Us</h2>
            <form action="">
            <input type="text" className='ms-4 form-control-sm border-0' placeholder='enter email' />
            </form>
            
            <button className='btn btn-secondary w-25 pe-3 m-3  text-align-center'>Send</button>
          </Col>
          <Col lg={4}  className='mb-5' >
            <h3 className='text-white mt-4'>Connect With Us</h3>
            <div className=''>
              <i class="fa-brands fa-instagram mt-3 ms-2 text-white fa-2x"></i>

              <i class="fa-brands fa-facebook mt-3 ms-2 text-white fa-2x"></i>
              <i class="fa-brands fa-github mt-3 ms-2 text-white fa-2x"></i>
              <i class="fa-brands fa-linkedin mt-3 ms-2 text-white fa-2x"></i>
              <i class="fa-brands fa-twitter mt-3 ms-3 text-white fa-2x "></i>
            </div>
            <div className='text-white'>
              <li class=" fa-solid fa-envelope mt-3 ms-3 text-white me-1 "></li>employeedesk@gmail.com
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer