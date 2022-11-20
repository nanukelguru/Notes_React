import Note from "./Note";

const list = [
  { title: "Hi", message: "World", id: "123" },
  { title: "Second note", message: "World", id: "1234" }
];

function NotesList(){
    return(
        <div>
            {
            list.map(note =><Note key={note.id} title={note.title} message={note.message}/>)
            }
        </div>
    )

}
export default NotesList;