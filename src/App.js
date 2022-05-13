import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav';
import About from './componets/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
