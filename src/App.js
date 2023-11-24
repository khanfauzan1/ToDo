import React,{useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=useState([]);
  function addNote(note){
       setNotes(prevValue =>{
        return [...prevValue,note];
       })
  }
  
  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteitem,index)=>{
         return index!==id;
      })
    })
}
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
     { notes.map((noteItem,index) =>{
        return <Note
          title={noteItem.title}
          content={noteItem.content}
          id={index}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
