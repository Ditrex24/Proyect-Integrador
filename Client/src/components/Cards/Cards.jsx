import Card from '../Card/Card';
import styles from "./Cards.module.css";

export default function Cards(props) {
   const { characters, onClose } = props;
 
   return (
     <div className={styles.cartas}>
       {characters.map((chart) => {
         return (
        
           <Card 
             key={chart.id}
             id={chart.id}
             name={chart.name}
             status={chart.status}
             species={chart.species}
             gender={chart.gender}
             origin={chart.origin.name}
             image={chart.image}
             onClose={onClose}
           />
         );
       })}
     </div>
   );
 }