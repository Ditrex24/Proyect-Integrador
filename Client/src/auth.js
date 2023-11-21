import axios from 'axios';

export function login(userData, setAccess, navigate) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    const { access } = data;
    setAccess(data);
    access && navigate('/home');
  });
}
