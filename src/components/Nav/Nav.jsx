import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../Nav/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { onSearch } = props;
  const [randomId, setRandomId] = useState(null);

  const agregarPersonajeAleatorio = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    setRandomId(randomId);
    onSearch(randomId.toString());
  };

  return (
    <div className={styles.navBar} >
      <Link className={styles.bttnH} to="/home">Home</Link>
      <Link className={styles.bttnA} to="/about">About</Link>
      <Link className={styles.fav} to={"/favorites"}>Favoritos</Link>
      <button className={styles.bttnR} onClick={agregarPersonajeAleatorio}>Personaje Aleatorio</button>
      <div className={styles.nav}>
      <SearchBar onSearch={onSearch} />
    </div>
      </div>
  );
};

export default Nav;


















