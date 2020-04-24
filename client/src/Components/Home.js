import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as boardServices from "../services/board-services";
import * as linkServices from "../services/link-services";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      boards: null,
      redirectTo: null
    };
  }

  componentDidMount = () => {
    boardServices.getBoards()
      .then(boards => {

        this.setState({ boards: boards.data.boards })
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

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <Link to="/board/add"><i class="fas fa-plus-circle fa-2x text-right d-block mt-5"></i></Link>
          {this.state.boards !== null &&
            <div class="container mt-4">
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
        </div>
      );
    }
  }
}



export default Home;



