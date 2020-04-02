import React from 'react';
import Header from './Components/Header/Header';
import Note from './Components/Note/Note';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Note 
      title="Note Title"
      content="Note Content"
    />
    <Footer />
  </div>
)

export default App;
