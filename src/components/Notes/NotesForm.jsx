import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./NotesForm.module.scss";

const Notesform = ({ createNote }) => {
  const [note, setNote] = useState({ description: "", date: "" });

  const addNewNoteHandler = (e) => {
    e.preventDefault();
    const newNote = { ...note, id: Date.now() };
    setNote({ description: "", date: "" });
    createNote(newNote);
  };

  return (
    <form className={classes.form}>
      <div className={classes.textarea}>
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
        ></textarea>
      </div>
      <Input
        label="Date"
        id="date"
        type="date"
        value={note.date}
        onChange={(e) => setNote({ ...note, date: e.target.value })}
      />
      <div className={classes.actions}>
        <Button onClick={addNewNoteHandler}>Add To NoteBook</Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
};

export default Notesform;
