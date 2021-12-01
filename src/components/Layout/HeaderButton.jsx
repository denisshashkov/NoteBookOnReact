import React, { useState } from "react";
import classes from "./HeaderButton.module.scss";
import Button from "../UI/Button";

const Headerbutton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  return (
    // <button className={btnClasses} onClick={props.onClick}>
    //   <span>Your Notes</span>
    //   <span className={classes.badge}>0</span>
    // </button>
    <Button>
      <span>Your Notes</span>
      <span className={classes.badge}>0</span>
    </Button>
  );
};

export default Headerbutton;
