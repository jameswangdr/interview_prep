import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Like from './components/Like';
import Css from './components/Css/Css';
import Stoplight from './components/Stoplight/Stoplight'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Stoplight></Stoplight>
      <Css></Css>
      <Like></Like>
    </div>
  );
}

export default App;
