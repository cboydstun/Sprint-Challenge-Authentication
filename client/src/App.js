import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import './App.css';

import NavBar from './components/NavBar';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import UserList from './components/UserList'

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />
        

        <Switch>
          <Route exact path = '/' component = { RegisterPage }/>
          <Route path="/login" component={ LoginPage }/>
          <Route path="/register" component={ RegisterPage }/>
          {/* <PrivateRoute path="/protected" component={JokesList}/> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
