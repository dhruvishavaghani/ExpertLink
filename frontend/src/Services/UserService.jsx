import Axios from "axios";

const url = import.meta.env.VITE_BASE_URL

export const createUser = async (user) => {
    const response = await Axios.post(`${url}/user`, user).then((res) => {
      return res.data;
    });
    return response;
  };