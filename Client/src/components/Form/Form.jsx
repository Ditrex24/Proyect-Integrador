




import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    
    <div className={styles.mainDiv}>
      <form className={styles.mail} onSubmit={handleSubmit}>
        {/* USERNAME */}
        <h2 className={styles.inicio}>Iniciar sesión</h2>
        <label className={styles.ma} htmlFor="">Email</label>
        <input 
          type="text"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
            ) : (
              <p>{errors.e3}</p>
              )}

        {/* PASSWORD */}
        <label className={styles.pa}   htmlFor="">Password</label>
        <input 
          type="password"
          placeholder="Password..."
          name="password"
          onChange={handleChange}
          value={userData.password}/>


          {errors.p1 ? (
            <p>{errors.p1}</p>
          ) : errors.p2 ? (
            <p>{errors.p2}</p>
          ) : errors.p4 ? (
            <p>{errors.p4}</p>
          ) : errors.p3 ? (
            <p>{errors.p3}</p>
          ) : (
            <p></p>
          )}
          <button className={styles.login} >login</button>
        </form>
      </div>
    );
  };
  
  export default Form;