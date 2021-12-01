import React, { Fragment } from "react";
import HeaderButton from "./HeaderButton";
import notebookImage from "../../assets/notebook.jpg";

import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>NoteBook</h1>
        <HeaderButton />
      </header>
      <div className={classes["header-image"]}>
        <img src={notebookImage} alt="notebook" />
      </div>
    </Fragment>
  );
};

export default Header;
