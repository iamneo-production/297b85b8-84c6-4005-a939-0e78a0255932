// import React from 'react';
import "./App.css";
import Login from './component/Login';
import Sign_Up from './component/Sign_Up';

import Home from './component/home_page';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>

    <Router>
      <div className={"main container"}>
          <Switch>
          
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Sign_Up />
              </Route>
              <Route path="/homepage">
                <Home/>
              </Route>
          
          </Switch>
      </div>
    </Router>

    </>
  );
}


export default App;
