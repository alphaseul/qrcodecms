import React from 'react';
import './App.css';
import Header from "./Header";
import  {
    BrowserRouter as Router,
    Route,
    Switch

} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login"
import NoPath from "./404";

function App() {
  return (
      <Router>
          <div>
              <Header/>
              <Switch>
                  <Route exact path="/">
                      <Home/>
                  </Route>
                  <Route path="/login">
                      <Login/>
                  </Route>
                  <Route path="*">
                      <NoPath/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
