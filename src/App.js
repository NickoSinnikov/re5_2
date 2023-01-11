import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewsBlock from './components/NewsBlock';
import SearchWidget from './components/SearchWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewsBlock />
        <SearchWidget logo="https://i.pinimg.com/originals/51/9e/a0/519ea0bf46022ce88ab6c12b0f38a323.jpg" />
      </header>
    </div>
  );
}

export default App;
