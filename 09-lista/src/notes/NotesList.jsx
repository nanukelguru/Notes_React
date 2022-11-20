import Note from "./Note";

const list = [
  { title: "Hola", message: "Mundo", id: "123" },
  { title: "Segunda nota", message: "Mundo", id: "1234" },
];

function NoteList(){
    return(
        <div>
            {
                list.map(note =><Note key={note.id} title={note.title} message={note.message}/>)
            }
        </div>
    )

}
export default NoteList;