const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
    return axios
    .get(`${BASE_URL}/constellations`)
    .then(({data}) =>  data)
    .catch(({ message }) => {
      console.error(message);
    });
}


function create(body) {
    return axios
    .post(`${BASE_URL}/constellations`, body)
    .then(({ data }) => data)
    .catch(({ message }) => {
      console.error(message);
    });
}

function show(id) {
    return axios
    .get(`${BASE_URL}/constellations/${id}`)
    .then(({data}) => {
      return data;
    })
    .catch(({ message }) => {
      console.error(message);
    });
}

function update(id, body) {
  return axios
  .put(`${BASE_URL}/constellations/${id}`)
  .then(({ data }) => data)
  .catch(({ message }) => {
    console.error(message);
  });
}

function destroy(id) {
  return axios
  .delete(`${BASE_URL}/constellations/${id}`)
  .then(({ data }) => data)
  .catch(({ message }) => {
    console.error(message);
  });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};