import BASE_URL from "./base_url";
import { commonStructure } from "./commonStructure";

//admin register
export const adminRegisterApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/register`,body)
}

//admin login

export const adminloginApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/login`,body)
}

//add employee
export const addEmployee=async(body,header)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/add-employee`,body,header)
}
//get all employee data
export const getAllEmployees=async(sdata)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/get-all-employees?search=${sdata}`,{})
}
//get employee single
export const getEmployeeSingle=async(id)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/get-employee/${id}`,{})
}
//delete employee
export const removeEmployee=async(id)=>{
    return await commonStructure("DELETE",`${BASE_URL}/admin/delete-employee/${id}`,{})
}

//update employee
export const updateEmployee=async(id,body,headers)=>{
    return await commonStructure("PUT",`${BASE_URL}/admin/edit-employee/${id}`,body,headers)
}

//filter status
export const filterStatus=async(data)=>{
    return await commonStructure("GET",`${BASE_URL}/admin/filter?filterData=${data}`,{})
}