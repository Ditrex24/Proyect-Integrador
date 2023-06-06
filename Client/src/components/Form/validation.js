const validation = (values) => {
    let errors = {};
  
    // Email validation
    if (!values.email.trim()) {
      errors.e1 = "¡Es necesario un email!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.e2 = "El email debe ser valido";
    } else if (values.email.length > 50) {
      errors.e3 = "El email es demasiado largo";
    }
  
    // Password validation
    if (!values.password.trim()) {
      errors.p1 = "¡Se requiere contraseña!";
    } else if (values.password.length < 6 || values.password.length > 10) {
      errors.p2 = "La contraseña debe ser entre 6 a 10 caracteres";
    } else if (!/\d/.test(values.password)) {
      errors.p3 = "La contraseña debe contener un numero";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.p4 = "La contraseña debe contener una letra mayuscula";
    }
  
    return errors;
  };
  
  export default validation;
  