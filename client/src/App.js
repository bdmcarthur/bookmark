import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Signup from "./Components/Signup";
import LoginForm from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import About from "./Components/About";
import addLinkForm from "./Components/addLinkForm";
import AddBoardForm from "./Components/AddBoardForm";
import Board from "./Components/Board";
import Collection from "./Components/Collection";
import * as boardServices from "./services/board-services";
import * as collectionServices from "./services/collection-services";
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
      loaded: false,
      boards: null,
      collections: null
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  updateUser = userObject => {
    this.setState(userObject);
  };

  getBoards = () => {
    boardServices.getBoards()
      .then(boards => {
  
        this.setState({
          boards: boards.data.boards
        });
      })
      .catch(error => {
        console.log(error)
      });
  };

  getCollections = () => {
    collectionServices.getCollections()
      .then(collections => {
  
        this.setState({
          collections: collections.data.collections
        });
      })
      .catch(error => {
        console.log(error)
      });
  };

  getUser = () => {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user,
          loaded: true
        });
        this.getBoards()
        this.getCollections()
      } else {
        this.setState({
          loggedIn: false,
          user: null,
          loaded: true
        });
      }
    });
  }

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
          <Route
            exact
            path="/"
            render={() => <Home user={this.state.user}/>}
          />
          <Route exact path="/:boardId/link/add" component={addLinkForm} />
          <Route exact path='/board/add' render={(props) => <AddBoardForm {...props} collections={this.state.collections}/>} />
          <Route exact path="/board/:id" component={Board} />
          <Route exact path="/collection/:id" component={Collection} />
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
