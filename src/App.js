import React from 'react';
import Header from './Components/Header/Header';
import Note from './Components/Note/Note';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
