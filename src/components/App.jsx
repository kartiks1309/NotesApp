import react, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App() {
  const [list, setList] = useState([]);
  function addNote(newNote) {
    setList((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setList((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {list.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
