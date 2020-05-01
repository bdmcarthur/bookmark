import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as boardServices from "../services/board-services";
import * as postServices from "../services/post-services";
import * as collectionServices from "../services/collection-services";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
      collections: null,
    };
  }

  componentDidMount = () => {
    collectionServices
      .getCollections()
      .then((collections) => {
        this.setState({
          collections: collections.data.collections,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let user = this.props.user;
    let collections = this.state.collections;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          {collections &&
            (user ? (
              <div className="container">
                <Link to={`/collection/add`}>
                  <i class="fas fa-plus-circle fa-2x text-right d-block mt-5"></i>
                </Link>
                {collections.length > 0 ? (
                  <div class="container mt-4">
                    <div class="row">
                      {collections.map((collection) => (
                        <div class="col-6 col-md-4 mt-4">
                          <div class="board-card">
                            <Link
                              to={`/collection/${collection._id}`}
                              class="h1"
                            >
                              {collection.name}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <h1 className="text-center">Add some collections!</h1>
                )}
              </div>
            ) : (
              <div class="container text-center">
                <h1>Sign up or Log in to Get Started!</h1>
              </div>
            ))}
        </div>
      );
    }
  }
}

export default Home;
