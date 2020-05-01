import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Auth from "./Views/Auth";
import NoMatch from "./Views/NoMatch";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import AddPostForm from "./Components/AddPostForm";
import AddBoardForm from "./Components/AddBoardForm";
import AddCollectionForm from "./Components/AddCollectionForm";
import Board from "./Views/Board";
import Collection from "./Views/Collection";
import * as collectionServices from "./services/collection-services";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false,
      collections: null,
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  updateUser = (userObject) => {
    this.setState(userObject);
  };

  getCollections = () => {
    collectionServices
      .getCollections()
      .then((collections) => {
        if (collections.data.collections.length > 0) {
          this.setState({
            collections: collections.data.collections,
          });
        }
        // else {
        //   this.createDefaultCollection();
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // createDefaultCollection = () => {
  //   let name = "My Collection";
  //   collectionServices
  //     .addCollection({ name })
  //     .then((collections) => {
  //       this.setState({
  //         collections: collections.data.collections,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  getUser = () => {
    axios.get("/user/").then((response) => {
      if (response.data.user) {
        this.setState({
          user: response.data.user,
          loaded: true,
        });
        this.getCollections();
      } else {
        this.setState({
          user: null,
          loaded: true,
        });
      }
    });
  };

  render() {
    return (
      this.state.loaded === true && (
        <BrowserRouter>
          <Navbar updateUser={this.updateUser} user={this.state.user} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home user={this.state.user} />}
            />
            <Route exact path={`/:boardId/post/add`} component={AddPostForm} />
            <Route
              exact
              path={`/:collectionID/board/add`}
              render={(props) => (
                <AddBoardForm {...props} collections={this.state.collections} />
              )}
            />
            <Route exact path={`/board/:id`} component={Board} />
            <Route
              exact
              path={`/collection/add`}
              component={AddCollectionForm}
            />
            <Route exact path={`/collection/:id`} component={Collection} />
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route
              path="/signup"
              render={() => <Signup updateUser={this.updateUser} />}
            />
          </Switch>
        </BrowserRouter>
      )
    );
  }
}

export default App;
