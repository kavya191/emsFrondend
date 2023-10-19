import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { adminloginApi } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Login() {
  //hook used for navigation
  const navigate = useNavigate()

  //create state to hold inputs
  const [loginInputs, setLoginInputs] = useState({
    'email': "",
    'psw': ""
  })
  //create state for validation
  const [emailValid, setEmailValid] = useState(true)
  const [pswValid, setPswValid] = useState(true)

  //access input through onChange event
  const setInputs = (e) => {
    const { value, name } = e.target
    if (name == 'email') {

      //match() method used to check
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmailValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      }
      else {
        setEmailValid(false)//<p className='text-danger'>* invalid email !</p>
      }
    }
    if (name == 'psw') {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setPswValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      } else {
        setPswValid(false)
      }
    }

   
  }
  console.log(loginInputs);
  //event calling for navigation
  const handleSubmit = async () => {
    //destructure inputs from state
    const { email, psw } = loginInputs
    //check condition
    if (email == "" || psw == "") {
      // alert("all inputs are required")
     toast.warn("all inputs are required")
    } else {
      //by using async and await response can store ditectly into a variable.
      //data stored in response.data
      //so we use the name data.key and value are same.detructure it
      const result = await adminloginApi(loginInputs)
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        // alert(result.data)
        navigate('/adminhome')
      } else {
        alert(result.response.data)
      }
    }

  }


  return (
    <div className='bg-white p-5'>
      <Container>
        <Row>
          <Col lg={8} className='p-1'>
            <img src="https://i.pinimg.com/originals/96/19/99/96199963430a92bf5c15349943ec90aa.gif" alt="" width="100%" />
          </Col>
          <Col lg={4}>
            <form className='pt-5 '>
              <h2 className=' text-center fw-bold' style={{ color: '#2e466e' }}>Admin Login</h2>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  onChange={(e) => setInputs(e)}
                  name='email'
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                {!emailValid &&
                  <p className='text-danger'>* invalid email !</p>}

              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  onChange={(e) => setInputs(e)}
                  name='psw'
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                {
                  !pswValid &&
                  <p className='text-danger'>* invalid password !</p>
                }
              </div>

              <div className="d-grid pt-3 ">
                <button type="button" className="btn text-white " style={{ backgroundColor: '#2e466e' }} 
                onClick={handleSubmit}>
                  Submit
                </button>
              </div>

            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
}

export default Login 