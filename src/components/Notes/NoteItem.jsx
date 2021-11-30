import React from "react";
import classes from "./NoteItem.module.scss";

const NoteItem = ({ note }) => {
  return (
    <li className={classes.note}>
      <div>
        <div className={classes.date}>{note.date}</div>
        <div className={classes.description}>{note.description}</div>
      </div>
    </li>
  );
};

export default NoteItem;
