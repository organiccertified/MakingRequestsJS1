const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
    return axios
    .get(`${BASE_URL}/constellations`)
    .then(({data}) =>  
      console.log(data)  //returning all data with a console.log PASSING
    )  
    .catch(({ message }) => {
      console.error(message);
    });
}


function create(body) {
    return axios
    .post(`${BASE_URL}/constellations`, body)
    .then(({ data }) => data)  //THINK I MISS TO FINISH THIS?
    .catch(({ message }) => {
      console.error(message);
    });
}

function show(id) {
    return axios
    .get(`${BASE_URL}/constellations/${id}`)
    .then(({data}) => {               //THINK I MISS TO FINISH THIS?
      return data;
    })
    .catch(({ message }) => {
      console.error(message);
    });
}

function update(id, body) {
  return axios
  .put(`${BASE_URL}/constellations/${id}`)
  .then(({ data }) => data)                       //THINK I MISS TO FINISH THIS?
  .catch(({ message }) => {
    console.error(message);
  });
}

function destroy(id) {
  return axios
  .delete(`${BASE_URL}/constellations/${id}`)
  .then(({ data }) => {                            //THINK I MISS TO FINISH THIS?
    let result = data.find((data)=> { 
      data.id == id
    } )    
  return result
})
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
