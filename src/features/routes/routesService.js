import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
  const res = await axios.get(API_URL + "/routes");
  console.log(res.data);
  return res.data;
};

const routesService = {
  getAll,
};

export default routesService;
