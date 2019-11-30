import React from 'react';
import axios from "axios"
import { BrowserRouter, Route, Switch ,Link} from "react-router-dom";
import './App.css';

import Login from './pages/Login'
import Home from './pages/Home'
import Feed from './pages/FeedPage'
import AddDeadline from './pages/AddDeadline'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => <Login {...props}/>} />
            <Route exact path="/home-calendar" render={props => <Home {...props}/> } />
            <Route exact path="/home-feed" render={props => <Feed {...props}/> } />
            <Route exact path="/add-deadline" render={props => <AddDeadline {...props}/> } />

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
