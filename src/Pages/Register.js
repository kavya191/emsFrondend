import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { adminRegisterApi } from "../services/allApis";

function Register() {
  const navigate = useNavigate();
  //state to hold inputs
  const [inputs, setInputs] = useState({
    email: "",
    psw: "",
    conpsw: "",
  });
  //state for validation
  const [emailValid, setEmailValid] = useState(true);
  const [pswValid, setPswValid] = useState(true);
  const [conpswValid,setConpswValid]=useState(true)
  const getInputs = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    if (name == "email") {
      if (
        value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEmailValid(true);

        setInputs({ ...inputs, [name]: value });
      } else {
        setEmailValid(false);
      }
    }
    if (name == "psw") {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setPswValid(true);

        setInputs({ ...inputs, [name]: value });
      } else {
        setPswValid(false);
      }
    }
    if (name == "conpsw") {
        if (value.match(/^[a-zA-Z0-9]+$/)) {
          setConpswValid(true);
          setInputs({ ...inputs, [name]: value });
        } else {
          setConpswValid(false);
        }
      }
  };
  console.log(inputs);
  const handleSubmit = async () => {
    //destructure
    const { email, psw, conpsw } = inputs;
    if (!email || !psw || !conpsw) {
      alert("all fields are required");
    } else {
      if (psw == conpsw) {
        const result = await adminRegisterApi(inputs);
        if (result.status >= 200 && result.status < 300) {
          navigate("/");
        } else {
          alert("error");
        }
      } else {
        alert("not matching");
      }
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8} className="p-1">
            <img
              src="https://i.pinimg.com/originals/96/19/99/96199963430a92bf5c15349943ec90aa.gif"
              alt=""
              width="100%"
            />
          </Col>
          <Col lg={4}>
            <form className="pt-5 mb-5 ">
              <h2 className=" text-center fw-bold" style={{ color: "#2e466e" }}>
                Admin Register
              </h2>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  onChange={(e) => getInputs(e)}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                {!emailValid && (
                  <p className="text-danger">* invalid email !</p>
                )}
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  onChange={(e) => getInputs(e)}
                  name="psw"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                {!pswValid && (
                  <p className="text-danger">* invalid password !</p>
                )}
              </div>
              <div className="mb-3">
                <label> Confirm Password</label>
                <input
                  onChange={(e) => getInputs(e)}
                  name="conpsw"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid pt-3 ">
                <button
                  type="button"
                  className="btn text-white "
                  style={{ backgroundColor: "#2e466e" }}
                  onClick={handleSubmit}
                >
                  SignIn
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
