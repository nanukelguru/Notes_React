import { createContext } from "react";


const list = [
  { title: "Hi", message: "World", id: "123" },
  { title: "Second note", message: "World", id: "1234" },
];

export const NotesContext = createContext();

export function NotesProvider({children}){
     return(
        <NotesContext.Provider value={ {notes: list}}>
            {children}
        </NotesContext.Provider>
     )
}