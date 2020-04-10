import React from 'react';
import Header from './Components/Header/Header';
import CreateArea from './Components/CreateArea/CreateArea';
import Note from './Components/Note/Note';
import Footer from './Components/Footer/Footer';
import Notes from './notes';
import './App.css';


function App() {
  function addNote(note) {
    console.log(note);
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {Notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
      ))}
      <Footer />
    </div>
  )}

export default App;
