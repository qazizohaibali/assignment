import api from "../utils/api"
import { EndPoints } from "../utils/endpoints"

export const getAllSupplier=async(params)=>{
    try{
        
        const data= await api.get(EndPoints.SUPPLIERS,{params});
        return data
    }catch(error){
        throw new Error(error?.message)
    }
}

