import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewsBlock from './components/NewsBlock';
import SearchWidget from './components/SearchWidget';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <NewsBlock />
        <SearchWidget logo="https://i.pinimg.com/originals/51/9e/a0/519ea0bf46022ce88ab6c12b0f38a323.jpg" />
        <Services/>
      </div>
    </div>
  );
}

export default App;
