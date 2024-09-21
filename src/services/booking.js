import api from "../utils/api"
import { EndPoints } from "../utils/endpoints"

export const getAllBookings=async(params)=>{
    try{
        
        const data= await api.get(EndPoints.GET_ALL_BOOKINGS,{params});
        console.log(data);
        
        return data
    }catch(error){
        throw new Error(error?.message)
    }
}




