import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Auth from "./Views/Auth";
import NoMatch from "./Views/NoMatch";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
          <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>


      </>
    </Router>
  );
}

export default App;
