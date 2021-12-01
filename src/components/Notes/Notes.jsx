import React, { useState } from "react";
import Modal from "../UI/Modal";
import Notesform from "./NotesForm";
import Noteslist from "./NotesList";

const Cart = (props) => {
  const [notes, setNote] = useState([]);

  const createNoteHandler = (newNote) => {
    setNote([...notes, newNote]);
  };

  return (
    <Modal onClose={props.onClose}>
      <Notesform createNote={createNoteHandler} />
      <Noteslist notes={notes} key={notes.id} />
    </Modal>
  );
};

export default Cart;
