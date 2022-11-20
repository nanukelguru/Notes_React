import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Note from "./Note";


function NotesList(){
    const { notes } = useContext(NotesContext);
    return (
      <div>
        <p style={{ textAlign: "right" }}>You have {notes.length} notes saved</p>
        {notes.map((note) => (
          <Note key={note.id} title={note.title} message={note.message} />
        ))}
      </div>
    );

}
export default NotesList;