import React from "react";
import styles from '../Favorites/Favorites';
import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = (props) => {
  const { myFavorites } = props;

  return (
    <div className={styles.favoritos}>
      {myFavorites.map((chart) => {
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



