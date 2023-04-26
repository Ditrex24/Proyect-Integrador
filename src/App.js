// import characters, {} from './data.js';
import React, { useState } from 'react';
import axios from "axios"
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx";

function App() {
   
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         const foundCharacter = characters.find((character) => character.id === data.id);
         if (foundCharacter) {
           window.alert('¡Este personaje ya ha sido agregado,!');
         } else {
           if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
           } else {
             window.alert('¡No hay personajes con este ID!');
           }
         }
       });
     }
   
   const onClose = (id) => {
setCharacters (characters.filter((chart)=> chart.id !== Number (id))) 
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose = {onClose} />
      </div>
   );
}


export default App;