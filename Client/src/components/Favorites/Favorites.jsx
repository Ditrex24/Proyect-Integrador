import React, {useState} from "react";
import styles from '../Favorites/Favorites';
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards} from "../../redux/action";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) =>{
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }
  const handleFilter = (e) => {
    dispatch(filterCards (e.target.value));
  };

  return (
    <div className={styles.favoritos}>
       <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      { myFavorites
      && myFavorites.map((chart) => {
          return (
            <Card
              key={chart.id}
              id={chart.id}
              name={chart.name}
              status={chart.status}
              species={chart.species}
              gender={chart.gender}
              origin={chart.origin?.name}
              image={chart.image} />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    
  };
};


export default connect(mapStateToProps, null)(Favorites);



