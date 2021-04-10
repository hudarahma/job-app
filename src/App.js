import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContextProvider from "./Context";
import './App.css';
import Home from './pages/Home';
import Job from './pages/Job';



function App() {
  
  return (
    <ContextProvider>
      <Router>
        
        <Route path='/job/:id' exact component={Job} />
        {/* <Route path='/:page' component={Home}/> */}
        <Route path="/" exact component={Home} />
      </Router>
    </ContextProvider>
  );
}

export default App;
