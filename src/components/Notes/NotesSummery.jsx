import React from "react";
import Button from "../UI/Button";
import classes from "./NotesSummery.module.scss";

const Notessummery = ({ onShowCart }) => {
  return (
    <section className={classes.summary}>
      <h2>Here you can save your notes and plan your schedule!</h2>
      <Button onClick={onShowCart}>Add Note</Button>
    </section>
  );
};

export default Notessummery;
