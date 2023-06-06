import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card(props) {
  const {
    name,
    id,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);




  return (
    <div className={styles.carta}>
      {isFav ?(
        <button className={styles.bttnFav} onClick={handleFavorite}>🤍</button>
      ) : (
        <button className={styles.bttnFa} onClick={handleFavorite}>🤍</button>
      )}

      <button className={styles.bttn} onClick={() => onClose(id)}>Delete</button>

      <img className={styles.img} src={image} alt="Personajes" />

      <div className={styles.Text}>
        <Link strict to={`/detail/${id}`}>
          <h1 className={styles.nombre}>{name}</h1>
        </Link>
        <div className={styles.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
        </div>
      </div>
    </div>
  );
      }


const mapDispatchToProps = (dispatch) => {
  return {
    addFav : (character) => { 
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    }
  }
}


const mapStateToProps = (state) =>{
  return{
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
