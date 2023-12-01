import React from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AdminHeader from '../Components/AdminHeader';
function AdminHome() {
  return (
    <div>
      <AdminHeader/>
      <Row id='home' >
        <Col lg={5}  >
          <h1 id='title' className='p-4'>Makes Employee <br /> Management Easy</h1>
          <p className='text-dark fs-1 p-4 mb-3 '>The Employee Desk <br></br> Designed To   Integrate all Of These Necessary Elements</p>
        </Col>
        <Col lg={7}>
          <img className=' h-75 ' width="75%" src="https://uploads-ssl.webflow.com/5e45941b4b61a64f169ca157/5e956406c7d8c2078fbe3bad_ezgif.com-optimize(2).gif" alt="" />
        </Col>

      </Row>
      <Container >
        <Row className='mt-4  '>
          <Col lg={6} className=' p-3 ' >
            <Link to={'/add'} style={{ textDecoration: "none" }}>
              <Card  className='text-center ms-4 me-3 ' id='c1' style={{ width: '80%',border:"none" }}>
                <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/a3/2d/d6/a32dd64c50f06083b8bb8ac077fa5209.gif" />
                <Card.Body>

                  <Card.Text>
                    <h3 className='text-white'>Add New Employee</h3>
                    <p className='text-white'> Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>

                  </Card.Text>

                </Card.Body>
              </Card>
            </Link>

          </Col>

          <Col lg={6} className='text-center p-3 '>
            <Link to={'/manage'} style={{ textDecoration: "none" }}>
            <Card id='c1'  className='text-center ms-4 me-3  '  style={{ width: '80%',border:"none" }} >
              <Card.Img style={{width:'100%',height:'300px'}} variant="top" 
              src="https://i.pinimg.com/originals/75/95/2d/75952ddbecd4743baf83236395b20541.gif" />
              <Card.Body>

                <Card.Text className='text-white'>
                  <h3 >Manage Employee</h3>
                  <p> Some quick example text to build on the card title and make up the
                    bulk of the card's content.</p>

                </Card.Text>

              </Card.Body>
            </Card>
            </Link>
    
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default AdminHome