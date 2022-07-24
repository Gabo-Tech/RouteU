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

const like = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + `routes/likes/${_id}`,{}, {
      headers: {
        authorization: user?.token
      },
    } );
  return res.data;
};

const dislike = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + `routes/dislike/${_id}`,{}, {
      headers: {
        authorization: user?.token
      },
    } );
  return res.data;
};

const addComment = async (comment) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + 'comments/', comment,  {
    headers: {
      authorization: user?.token,      
    },
  });  
  return res.data;
};

const avgRating = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.get(API_URL + `avgRating/${_id}`,{
    headers: {
      authorization: user?.token,      
    },
  })  
  return res.data;
}

const routesService = {
  getAll,
  getById,
  like,
  dislike,
  addComment,
  avgRating
};

export default routesService;
