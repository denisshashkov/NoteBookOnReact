import React, { Fragment } from "react";
import notebookImage from "../../assets/notebook.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>NoteBook</h1>
      </header>
      <div className={classes.headerImage}>
        <img src={notebookImage} alt="notebook" />
      </div>
    </Fragment>
  );
};

export default Header;
