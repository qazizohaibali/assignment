import api from "../utils/api";
import { EndPoints } from "../utils/endpoints";

export const addCustomer = async (formData) => {
  try {
    const data = await api.post(EndPoints.ADD_CUSTOMER, formData);
    return data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const getAllCustomer = async (params) => {
  try {
    console.log(params);

    const data = await api.get(EndPoints.GET_ALL_CUSTOMERS, { params });
    return data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateStatus = async (id, value) => {
  try {
    const { data } = await api.put(`${EndPoints.UPDATE_STATUS}/${id}`, value);
    return data;
  } catch (error) {
    console.log(error);

    throw new Error(error?.message);
  }
};
