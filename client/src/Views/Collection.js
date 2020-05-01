import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as boardServices from "../services/board-services";
import { Link } from "react-router-dom";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: null,
      redirectTo: null,
    };
  }

  componentDidMount = () => {
    boardServices
      .getBoards()
      .then((boards) => {
        this.setState({ boards: boards.data.boards });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let boards = this.state.boards;
    let collectionID = this.props.match.params.id;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          {boards && (
            <div class="container">
              <Link to={`/${collectionID}/board/add`}>
                <i class="fas fa-plus-circle fa-2x text-right d-block mt-5"></i>
              </Link>

              {boards.length > 0 ? (
                <div class="row align-items-center">
                  {boards.map((board) => (
                    <div class="col-6 col-md-4 mt-4">
                      <Link to={`/board/${board._id}`}>
                        <div
                          class="card text-center"
                          style={{ width: "18rem" }}
                        >
                          {/* <img src="..." class="card-img-top" alt="..."></img> */}
                          <div class="card-body">
                            <h5 class="card-title">{board.name}</h5>
                            <p class="card-text">{board.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <h1>Add Some Boards!</h1>
              )}
            </div>
          )}
        </div>
      );
    }
  }
}

export default Collection;
