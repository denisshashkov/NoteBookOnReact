import NoteItem from "./NoteItem";
import classes from "./NotesList.module.scss";

const Noteslist = ({ notes }) => {
  return (
    <section className={classes.notes}>
      <ul>
        <h1>List Of Notes</h1>
        {notes.map((note) => (
          <NoteItem note={note} key={note.id} />
        ))}
      </ul>
    </section>
  );
};

export default Noteslist;
