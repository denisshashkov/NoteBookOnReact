import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Notes from "./components/Notes/Notes";
import NotesSummery from "./components/Notes/NotesSummery";
import Noteslist from "./components/Notes/NotesList";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [notesSummeryIsShown, setNotesSummeryIsShown] = useState(true);
  const [notes, setNotes] = useState([
    {
      id: "1",
      description: "some description",
      date: "30.11.2021",
    },
    {
      id: "2",
      description: "second description",
      date: "28.11.2021",
    },
    {
      id: "3",
      description: "third description",
      date: "21.11.2021",
    },
  ]);

  const showCartHandler = () => {
    setNotesSummeryIsShown(false);
    setCartIsShown(true);
  };

  return (
    <Fragment>
      <Header />
      <main>
        {cartIsShown && <Notes />}
        {notesSummeryIsShown && <NotesSummery onShowCart={showCartHandler} />}
        <Noteslist notes={notes} />
      </main>
    </Fragment>
  );
}

export default App;
