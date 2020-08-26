import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper.js';
import Header from './components/Header.js';
import Main from './components/Main.js';



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
      
    </div>
  );
}

export default App;
