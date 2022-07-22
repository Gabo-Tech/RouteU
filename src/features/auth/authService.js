import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (userdata) => {
  const res = await axios.post(API_URL + "/users", userdata);
  return res.data;
};

const login = async (userdata) => {
  const res = await axios.post(API_URL + "/users/login", userdata);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  console.log(res.data);
  return res.data;
};

const authService = {
  register,
  login,
};

export default authService;
