import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Header';
import Jobscard from './Jobscard';
import Search from './Search';
import Info from './Info';


function App() {
  
  return (
    <div className="app">
    
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Search />
            <Jobscard />
          </Route>
          <Route path="/company-info">
            <Header />
            <Info />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
