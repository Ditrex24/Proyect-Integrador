import styles from "./Card.module.css";

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
 
   return (
     <div className={styles.div}>
       <button onClick = {() => {onClose(id)}}>X</button>
       <img className={styles.img} src={image} alt="" />
       <h2>{name}</h2>
       <h2>{status}</h2>
       <h2>{species}</h2>
       <h2>{gender}</h2>
       <h2>{origin}</h2>
     </div>
   );
 }