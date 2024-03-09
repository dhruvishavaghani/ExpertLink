import Axios from "axios";

const url = import.meta.env.VITE_BASE_URL

export const loginUser = async (user) => {
    const response = await Axios.get(`${url}/users/login`, user).then((res) => {
      return res.data;
    });
    return response;
  };

