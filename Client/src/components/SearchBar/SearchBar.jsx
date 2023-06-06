import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar(props) {
  const {onSearch} = props;

  const [id, setId] = useState()

   const handleChange = (e) =>{
      setId(e.target.value);
   }

    
 return (
          <div>
             <label className={styles.label} for="search-input"></label>
             <input className={styles.input} type='search'  onChange={handleChange} value = {id} />
             <button className={styles.bttn} onClick={() => {onSearch(id)}}>🔍Buscar</button>
          </div>
       );
   }
