import axios from "axios";

const endpoint = "http://localhost:9999/api/";

interface userdata {
  name: string;
  email: string;
  password: string;
}
interface Loginuserdata {
  email: string;
  password: string;
}

export const allProducts = async () => {
  return await axios.get(`${endpoint}products`).then((res) => res.data);
};

export const aProduct = async (id: any) => {
  return await axios.get(`${endpoint}product/${id}`).then((res) => res.data);
};

export const newUser = async ({ name, email, password }: userdata) => {
  return await axios
    .post(`${endpoint}register`, { name, email, password })
    .then((res) => res.data);
};

export const loginUser = async ({ email, password }: Loginuserdata) => {
  return axios
    .post(`${endpoint}signin`, { email, password })
    .then((res) => res.data);
};
