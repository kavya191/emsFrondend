import React, { useContext, useEffect, useState } from "react";
import Tablecontent from "../Components/Tablecontent";
import { registerContext, updateContext } from "../Components/ContextShare";
import { Alert } from "react-bootstrap";
import { filterStatus, getAllEmployees, removeEmployee } from "../services/allApis";
import AdminHeader from "../Components/AdminHeader";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
function Manage() {
  //access register context
  const { registerUpdate, setRegisterUpdate } = useContext(registerContext);
  const { updateStatus, setUpdateStatus } = useContext(updateContext);
  //get all employee data
  //create state for store data of employees
  const [employees, setEmployees] = useState([]);
  //state for search
  const [searchData, setSearchData] = useState("");
  console.log(searchData);
  const getEmployees = async () => {
    const result = await getAllEmployees(searchData);
    //console.log(result);
    setEmployees(result.data);
  };
  //delete employee function
  const deleteEmployee = async (id) => {
    const result = await removeEmployee(id);
    if (result.status >= 200 && result.status < 300) {
      getEmployees();
    }
  };
    //function for filter employees
    const filterEmployees=async(data)=>{
      const result=await filterStatus(data)
      setEmployees(result.data)
      console.log(result.data);
     }
  useEffect(() => {
    getEmployees();
  }, [searchData]);
  //console.log(employees);

  return (
    <div>
      <AdminHeader />
      {registerUpdate ? (
        <Alert
          className="w-50 container p-3 mt-5"
          variant={"success"}
          dismissible
          onClose={() => setRegisterUpdate("")}
        >
          {registerUpdate} is added successfully
        </Alert>
      ) : (
        ""
      )}
      {updateStatus ? (
        <Alert
          className="w-50 container p-3 mt-5"
          variant={"success"}
          onClose={() => setUpdateStatus("")}
          dismissible
        >
          {updateStatus.fname + " " + updateStatus.lname} profile is updated
        </Alert>
      ) : (
        ""
      )}
      <div>
        <div class="input-group d-flex justify-content-center mt-5">
          <div id="search-autocomplete" class="form-outline">
            <input
              onChange={(e) => setSearchData(e.target.value)}
              type="search"
              id="form1"
              class="form-control"
              label="search employee"
              placeholder="search employee"
            />
          </div>
          <button
            type="button"
            class="btn"
            style={{ backgroundColor: "#2e466e", color: "white" }}
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="text-end p-5">
        <h6 className="me-4 mb-3">Filter Employee</h6>
        <ButtonGroup aria-label="Basic example">
          <Button onClick={()=>filterEmployees('active')} variant="info">Active</Button>
          <Button onClick={()=>filterEmployees('inactive')} variant="warning">InActive</Button>
          <Button onClick={getEmployees}  variant="secondary">All</Button>
        </ButtonGroup>
      </div>
      <Tablecontent
        empArray={employees}
        deleteEmp={deleteEmployee}
      ></Tablecontent>
    </div>
  );
}

export default Manage;
