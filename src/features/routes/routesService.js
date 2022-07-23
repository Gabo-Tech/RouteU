import axios from "axios";

const API_URL = "http://localhost:8080/";

const getAll = async () => {
  const res = await axios.get(API_URL + "routes/getAlldb");
  return res.data;
};

const getById = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.get(API_URL + `routes/getByIddb/${_id}`, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const routesService = {
  getAll,
  getById,
};

export default routesService;
