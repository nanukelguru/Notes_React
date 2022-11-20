import { useEffect, useState } from "react";


const list = [
  { title: "Hi", message: "World", id: "123" },
  { title: "Second note", message: "World", id: "1234" }
];

const LOCALSTORAGE_KEY = "MIAPP.list";

function useNotes(){
    const [notes, setNotes] = useState([list]);
    
    useEffect(()=>{
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes))
    }, [notes])
    function add(title, message){
        const id = Date.now();
        const noteObject = { title, message, id}
        setNotes([noteObject, ...notes]);
    }

    return {
        notes,
        add
    }
}

export default useNotes;