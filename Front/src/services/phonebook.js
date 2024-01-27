import axios from "axios";

const urlBase = "http://localhost:3001/api/dados";

const urlComens = "http://localhost:3001/api/comms"

const getAll = () => axios.get(urlBase);

const getMyPosts = (id) => axios.get(`${urlBase}/myposts/${id}`)

const getCommentsByPostId = (id) => axios.get(`${urlComens}/${id}`) 

const getOne = (id) => axios.get(`${urlBase}/${id}`);

const create = (dadoObject) =>
  axios.post(`${urlBase}/post`, dadoObject, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const createComment = (dadoObject) =>
  axios.post(`${urlComens}/`, dadoObject, 
  );

const remove = (id) => axios.delete(`${urlBase}/${id}`);

const removeComs = (id) => axios.delete(`${urlComens}/${id}`);

const update = (id, dadoObject) => {
const headers = {};
if (dadoObject.foto) {
  headers['Content-Type'] = 'multipart/form-data';
}

return axios.post(`${urlBase}/update/${id}`, dadoObject, { headers })
};

const dadoService = { getAll, getOne, create, remove, removeComs, update, getMyPosts, createComment, getCommentsByPostId};

export default dadoService;
