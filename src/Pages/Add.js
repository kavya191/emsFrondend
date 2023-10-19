import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/esm/Container";
import Dropdown from "react-bootstrap/Dropdown";

function Add() {
  //create state to hold inputs
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    status: "",
    location: ""
  })

  //access inputdata
  const setData = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }
  console.log(inputs);
  //create state to store profile image
  const [image, setImage] = useState("")

  //choose image
  const imageChoose=(e)=>{
    setImage(e.target.files[0])
  }
  console.log(image);
  //create state to hold image preview
  const [imgPreview,setImgPreview]=useState("")
  //useEffect
  useEffect(()=>{
    if(image){
      setImgPreview(URL.createObjectURL(image))
    }
  },[image])
  console.log(imgPreview);
  return (
    <div>
      <h1 className='text-center mt-5'>Register Employee Details</h1>


      <Container>
        <form>
          <div className='d-flex justify-content-center mb-5 mt-5'>
            <img 
            src={ imgPreview?imgPreview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucjZdDkDB9cH0OtpaW67OA6Gzulp6E-8eq3RZvypwE12zr1NpBv34pgUFtVeUPxcB0uU&usqp=CAU"} alt="" style={{ width: '200px', height: '200px', borderRadius: '100px' }} />
          </div>
          <Row>
            <Col>
              {/* firstname */}
              <div class="mb-6">
                <label
                  for="Firstname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  FirstName
                </label>
                <input
                  onChange={(e) => setData(e)}
                  type="text"
                  id="firstname"
                  name='fname'
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter first name"
                />
              </div>

              {/* email */}
              <div class="mb-6">
                <label

                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  onChange={(e) => { setData(e) }}
                  name="email"
                  id='eemail'
                  type="email"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter email"
                />
              </div>

              {/* gender */}

              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                gender
              </label>
              <div>
                <div class="flex items-center mb-2">
                  <input
                    onChange={(e) => { setData(e) }}
                    id="default-radio-1"
                    type="radio"
                    value={'male'}
                    name="gender"
                    required
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Male
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    onChange={(e) => { setData(e) }}
                    id="default-radio-2"
                    type="radio"
                    value={'female'}
                    name="gender"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Female
                  </label>
                </div>

                {/* file upload */}

                <div className="mt-3 mb-3">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="large_size">
                    File upload
                  </label>
                  <input
                    onChange={(e)=>{imageChoose(e)}}
                    name='profile'
                    required
                    class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
                    id="large_size"
                    type="file"
                  />
                </div>
              </div>
            </Col>

            {/*left side */}
            <Col>
              {/* lastname */}
              <div class="mb-6">
                <label
                  for="lastname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Lastname
                </label>
                <input
                  onChange={(e) => { setData(e) }}
                  type="text"
                  name='lname'
                  required
                  id="lastname"
                
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" enter lastname"
                />
              </div>
              {/* mobile number */}
              <div class="mb-6">
                <label
                  for="mobile"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Contant No
                </label>
                <input
                  onChange={(e) => { setData(e) }}
                  type="number"
                  id="mobnumber"
                  name='mobile'
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter mobile number"
                />
              </div>

              {/*employee status*/}
              <div class="mb-6">
                <label
                  for="statusid"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Employee Status
                </label>
                <select name='status' id='statusid' onChange={(e) => { setData(e) }}  >
                  <option value='' className='disabled' aria-disabled="true">Select</option>
                  <option value={'active'}>Active</option>
                  <option value={'inactive'}>InActive</option>
                </select>
                {/* <select
                  type="number"
                  id="mobnumber"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter mobile number"
                /> */}
              </div>


              {/* drop down */}

              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <div class="mb-6">
                <label
                  for="mobile"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Location
                </label>
                <input
                  onChange={(e) => { setData(e) }}
                  type="text"
                  id="elocation"
                  name='location'
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your address"
                />
              </div>
            </Col>
          </Row>

          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <button
            type="button"
            class="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </Container>
    </div>

  )
}

export default Add