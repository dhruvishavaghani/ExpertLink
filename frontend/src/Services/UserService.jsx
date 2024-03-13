import axios from "axios";

const url = import.meta.env.VITE_BASE_URL

export const loginUser = async (obj) => {
    const response = await axios.post(`${url}/api/user/login`, obj).then((res) => {
      return res.data;
    });
    return response;
  };

