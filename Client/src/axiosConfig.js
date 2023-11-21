import axios from 'axios';

const baseURL = 'http://localhost:3001/rickandmorty';

const instance = axios.create({
  baseURL,
});

export default instance;
