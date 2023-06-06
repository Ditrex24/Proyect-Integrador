// Commons imports
import { useEffect, useState } from 'react';
import axios from 'axios';
// Styles
import './App.css';
// Componenets
import Cards from './components/Cards/Cards';
import NavBar from './components/Nav/Nav';
import About from './components/About/About'
import Form from './components/Form/Form'

// Router-Dom
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';



// // Mi CODIGO AQU



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

   function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   }

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


   return (
      <div className='App'>
         {
            pathname !== '/' && <NavBar onSearch={onSearch} />
         }

         <Routes>
            <Route path={'/'} element={<Form login={login} />} />
            <Route path={'/home'} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/detail/:id'} element={<Detail />} />
            <Route path={'/favorites'} element={<Favorites />} />
         </Routes>
      </div>

   );
}

export default App;

