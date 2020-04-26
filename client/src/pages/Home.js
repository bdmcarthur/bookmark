import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../services/API";

class Home extends Component {

  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.loggedIn();
  }


  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container text-center mt-5">
        {this.state.loggedIn ? (
          <h1>Welcome!</h1>
        ) : (<h1>Join us!</h1>)}
      </div>
    );
  }
}

export default Home;