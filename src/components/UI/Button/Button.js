import React from "react";

// using CSS modules - and rename the file from
// Button.css to Button.module.css
import styles from './Button.module.css'

// using CSS module by applying the css dynamic (e.g.: className={styles.button})
const Button = (props) => {
  return (
    // onClick={props.onClick} doesn't exist at this moment because 
    // it's not pass as props from the 'CourseInput.js' JSX
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
