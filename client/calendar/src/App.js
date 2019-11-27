import React from 'react';
import axios from "axios"
import { BrowserRouter, Route, Switch ,Link} from "react-router-dom";
import './App.css';

import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => <Login {...props}/>} />
            <Route exact path="/home" render={props => <Home {...props}/> } />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
