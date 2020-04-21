import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Signup from "./Components/Signup";
import LoginForm from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import addForm from "./Components/addForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
      loaded: false
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  updateUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user,
          loaded: true
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null,
          loaded: true
        });
      }
    });
  };

  render() {
    return (
      <BrowserRouter>
        {this.state.loaded === true &&
          <Navbar
            updateUser={this.updateUser}
            user={this.state.user}
            loggedIn={this.state.loggedIn}
          />
        }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={addForm} />
          <Route
            path="/login"
            render={() => <LoginForm updateUser={this.updateUser} />}
          />
          <Route
            path="/signup"
            render={() => <Signup updateUser={this.updateUser} />}
          />
          <Route path="/about" render={() => <About />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
