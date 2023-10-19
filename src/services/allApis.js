import BASE_URL from "./base_url";
import { commonStructure } from "./commonStructure";

//admin login

export const adminloginApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/login`,body)
}