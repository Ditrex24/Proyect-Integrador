import axios from '../axiosConfig'; // Importa la instancia personalizada de Axios

export const addFav = (character) => {
  const endpoint = '/fav'; // Utiliza la instancia configurada, ya tiene la base URL
  return (dispatch)=> {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  const endpoint = '/fav/' + id; // Utiliza la instancia configurada, ya tiene la base URL
  return (dispatch) => {
    axios.delete(endpoint).then(({ data })=> {
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) =>{
  return {
    type: 'FILTER',
    payload: gender
  };
}

export const orderCards = (order) => {
  return {
    type: 'ORDER',
    payload: order
  };
}