import axios from "axios";

const url = import.meta.env.VITE_BASE_URL

export const getProfile = async () => {
    const response = await axios.get(`${url}/api/profile`).then((res) => {
      return res.data;
    });
    return response;
  };