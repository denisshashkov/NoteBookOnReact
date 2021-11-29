import React from "react";
import Input from "../UI/Input";

const Notesform = () => {
  return (
    <form>
      <Input
        label="Note"
        input={{ id: "note", type: "text", placeholder: "Enter your note" }}
      />
      <Input label="Date" input={{ id: "date", type: "date" }} />
    </form>
  );
};

export default Notesform;
