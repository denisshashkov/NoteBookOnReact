import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Notes from "./components/Notes/Notes";
import NotesSummery from "./components/Notes/NotesSummery";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [notesSummeryIsShown, setNotesSummeryIsShown] = useState(true);

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
      </main>
    </Fragment>
  );
}

export default App;
