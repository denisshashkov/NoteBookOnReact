import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./NotesForm.module.scss";

const Notesform = () => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const confirmHandler = (e) => {
    e.preventDefault();
  };

  const descriptionHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const addNewNoteHandler = () => {
    console.log(enteredDescription);
    console.log(enteredDate);
    setEnteredDescription("");
    setEnteredDate("");
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.textarea}>
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          value={enteredDescription}
          onChange={descriptionHandler}
        ></textarea>
      </div>
      <Input
        label="Date"
        id="date"
        type="date"
        value={enteredDate}
        onChange={dateHandler}
      />
      <div className={classes.actions}>
        <Button onClick={addNewNoteHandler}>Add To NoteBook</Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
};

export default Notesform;
