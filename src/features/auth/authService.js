import axios from "axios";

const API_URL = "https://routeu-backend.herokuapp.com";

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

const logout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/users/logout", {
    headers: {
      authorization: user?.token,
    },
  });
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};

const update = async (data) => {
  const user = JSON.parse(localStorage.getItem("user"), data);
  const res = await axios.put(API_URL + "/users/", {
    headers: {
      authorization: user?.token,
    },
  })
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
}

const authService = {
  register,
  login,
  logout,
  update
};

export default authService;
