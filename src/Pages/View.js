import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeSingle } from "../services/allApis";
import { Col, Row } from "react-bootstrap";
import BASE_URL from "../services/base_url";
import { ListGroup } from "react-bootstrap";
import AdminHeader from "../Components/AdminHeader";

function View() {
  const { id } = useParams();
  const [emp, setEmployee] = useState({});
  console.log(id);
  const getEmp = async () => {
    const result = await getEmployeeSingle(id);
    if (result.status >= 200 && result.status < 300) {
      setEmployee(result.data);
      console.log(result.data);
    }
  };
  useEffect(() => {
    getEmp();
  }, []);
  return (
    <div>
      <AdminHeader/>
      <h1 className="text-center mt-3 fw-bold" style={{color:'#2e466e'}} >{emp.fname + " " + emp.lname}</h1>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <img
            className="w-75 p-5 ms-4"
            style={{ height: "600px" }}
            src={`${BASE_URL}/uploads/${emp.profile}`}
            alt=""
          />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <ListGroup variant="flush" className="mt-2 pt-5 pe-5 mb-3 text-center">
            <ListGroup.Item className="mt-2 fs-3">First Name : {emp.fname}</ListGroup.Item>
            <ListGroup.Item className="mt-2 fs-3">Last Name : {emp.lname}</ListGroup.Item>
            <ListGroup.Item className="mt-2 fs-3">Email : {emp.email}</ListGroup.Item>
            <ListGroup.Item className="mt-2 fs-3">Mobile : {emp.mobile}</ListGroup.Item>
            <ListGroup.Item  className="mt-2 fs-3">Gender : {emp.gender}</ListGroup.Item>
            <ListGroup.Item  className="mt-2 fs-3">Status : {emp.status}</ListGroup.Item>
            <ListGroup.Item  className="mt-2 fs-3">Location : {emp.location}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default View;
