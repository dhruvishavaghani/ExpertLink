import axios from "axios";

const url = import.meta.env.VITE_BASE_URL

export const addService = async (obj) => {
    const response = await axios.post(`${url}/api/service`, obj).then((res) => {
      return res.data;
    });
    return response;
  };