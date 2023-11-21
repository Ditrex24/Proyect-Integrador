// App.js

import { useEffect, useState } from 'react';
import axios from './axiosConfig'; // Importa la instancia personalizada de Axios
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import NavBar from './components/Nav/Nav';
import About from './components/About/About'
import Form from './components/Form/Form'
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import { login } from './auth';

const email = '';
const password = '';

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation()
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function onSearch(query) {
    // Verifica si el parámetro es un número (ID) o una cadena (nombre)
    const isId = !isNaN(query);
  
    // Construye la URL según el tipo de búsqueda
    const endpoint = isId ? `/character/${query}` : `/character?name=${query}`;
  
    axios.get(endpoint).then(({ data }) => {
      if (Array.isArray(data)) {
        // Si es una búsqueda por nombre, data será un array de personajes
        setCharacters(data);
      } else if (data.name) {
        // Si es una búsqueda por ID, data será un solo personaje
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert(isId ? '¡No hay personajes con este ID!' : '¡No hay personajes con este nombre!');
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)))
  }

  return (
    <div className='App'>
      {
        pathname !== '/' && <NavBar onSearch={onSearch} />
      }

      <Routes>
        <Route path={'/'} element={<Form login={(userData) => login(userData, setAccess, navigate)} />} />
        <Route path={'/home'} element={<Cards characters={characters} onClose={onClose} />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/detail/:id'} element={<Detail />} />
        <Route path={'/favorites'} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
