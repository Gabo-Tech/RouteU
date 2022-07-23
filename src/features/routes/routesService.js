import axios from "axios";

const API_URL = "https://api-routes-data.herokuapp.com";

const getAll = async () => {
  const res = await axios.get(API_URL + "/getRoutes");
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(API_URL + "/getRouteById/" + id);
  return res.data;
};

const routesService = {
  getAll,
  getById,
};

export default routesService;
