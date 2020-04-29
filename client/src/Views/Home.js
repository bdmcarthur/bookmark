import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as boardServices from "../services/board-services";
import * as linkServices from "../services/link-services";
import * as collectionServices from "../services/collection-services";
import { Link } from "react-router-dom";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: null,
      redirectTo: null,
      collections: null
    };
  }

  componentDidMount = () => {
    boardServices.getBoards()
      .then(boards => {
        if (boards.data.boards.length > 0) {
          this.setState({ boards: boards.data.boards })
        }
      })
      .catch(error => {
        console.log(error)
      });

    collectionServices.getCollections()
      .then(collections => {
        if (collections.data.collections.length > 0) {
          this.setState({
            collections: collections.data.collections
          })
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { link, name, description } = this.state;
    linkServices.addLink({
      link,
      name,
      description
    })
      .then(listing => {
        console.log(listing)
      })
      .catch(error => {
        console.log(error)
      });
  };

  render() {
    let grid = this.state.combo
    let user = this.props.user
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        user
          ? <div className="container">
            <Link to="/board/add"><i class="fas fa-plus-circle fa-2x text-right d-block mt-5"></i></Link>
            {this.state.collections !== null &&
              < div class="container mt-4">
                <h2>Collections</h2>
                <div class="row">
                  {this.state.collections.map((collection) => (
                    <div class="col-6 col-md-4 mt-4">
                      <div class="board-card">
                        <Link to={`/collection/${collection._id}`} class="h1">{collection.name}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
            {this.state.boards !== null &&
              < div class="container mt-4">
                <h2>Boards</h2>
                <div class="row">
                  {this.state.boards.map((board) => (
                    <div class="col-6 col-md-4 mt-4">
                      <div class="board-card">
                        <Link to={`/board/${board._id}`} class="h1">{board.name}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }

          </div >
          :
          <div class="container text-center"><h1>Sign up or Log in to Get Started!</h1></div>
      );
    }
  }
}



export default Home;



