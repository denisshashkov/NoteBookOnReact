import React from "react";
import Modal from "../UI/Modal";
import Notesform from "./NotesForm";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Notesform />
    </Modal>
  );
};

export default Cart;
