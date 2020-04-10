import React from 'react';
import Header from './Components/Header/Header';
import CreateArea from './Components/CreateArea/CreateArea';
import Note from './Components/Note/Note';
import Footer from './Components/Footer/Footer';
import Notes from './notes';
import './App.css';


const App = () => (
  <div className="App">
    <Header />
    <CreateArea />
    {Notes.map(noteItem => (
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
        />
    ))}
    <Footer />
  </div>
)

export default App;
