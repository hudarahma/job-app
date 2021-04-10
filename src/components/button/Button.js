import React, { useContext } from "react";
import { MyContext } from "../../Context";
import styles from "./Button.module.css";

// Create a template button that we can call to represent all buttons in the
// in the project.
const Button = ({ children, type = 0 , onClick = ()=> {} }) => {
  const { fetchJobs } = useContext(MyContext);
  return (
    <button
      onClick={(ev) => onClick(ev)}
      className={`${styles.button} ${type === 2 ? styles.two : styles.one}  `}
    >
      {children}
    </button>
  );
};



export default Button;