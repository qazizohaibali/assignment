import api from "../utils/api"
import { EndPoints } from "../utils/endpoints"


export const addCustomer=async(formData)=>{
    try{
        const data= await api.post(EndPoints.ADD_CUSTOMER,{formData});
        return data
    }catch(error){
        throw new Error(error?.message)
    }

}
export const getAllService=async(params)=>{
    try{
        
        const data= await api.get(EndPoints.SERVICE,{params});
        return data
    }catch(error){
        throw new Error(error?.message)
    }
}



export const updateStatus=async(id,value)=>{
    try{       
        const {data}= await api.put(`${EndPoints.UPDATE_ADMIN_APPROVAL_STATUS}/${id}`,value);
        return data
    }catch(error){
        throw new Error(error?.message)
    }
}
