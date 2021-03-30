import React , {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import Jobscard from './Jobscard';
import Search from './Search';

function App() {

  return (
    <div className="app">
    
      <Header />
      <Search />
      <Jobscard />
      
    </div>
  );
}

export default App;
