import React from 'react';
import Login from './component/Login';
import Sign_Up from './component/Sign_Up';
import Home from './'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
                <home_page/>
              </Route>
          
          </Switch>
      </div>
    </Router>
    </>
  );

}

export default App;
