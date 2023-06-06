import React, { useState, useEffect } from "react";
import  styles  from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (

    <div >
      <img className={styles.detaImage} src={character.image} alt="personaje" />
      <div >
      <div className={styles.texto}>
      <h1>Name: {character.name}</h1>
      <h1>Status: {character.status}</h1>
      <h1>Species: {character.species}</h1>
      <h1>Gender: {character.gender}</h1>
      <h1>{character.origin?.name}</h1>
      </div>
    </div>
      </div>
  );
};

export default Detail;