import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as postServices from "../services/post-services";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      redirectTo: null,
      posts: null,
    };
  }

  componentDidMount = () => {
    const board = this.props.match.params.id;
    postServices
      .getPosts({ board })
      .then((posts) => {
        this.setState({
          posts: posts.data.post,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let boardID = this.props.match.params.id;
    let posts = this.state.posts;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          {posts && (
            <div class="container">
              <Link to={`/${boardID}/post/add`}>
                <i class="fas fa-plus-circle fa-2x text-right d-block mt-5"></i>
              </Link>
              <div class="row align-items-center">
                {posts.length > 0 ? (
                  <div class="container mt-4 text-center">
                    <div class="row">
                      {posts.map((post) => (
                        <div class="col-6 col-md-4 mt-4">
                          <img
                            src={post.link}
                            class="card-img-top"
                            alt="..."
                          ></img>
                          <div class="card-body">
                            <h4 class="card-title">{post.name}</h4>
                            <p class="card-text">{post.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <h1 className="text-center">Add some posts!</h1>
                )}

                {/* <ReactPlayer
                          url={post.link}
                          width="100%"
                          height="190px"
                        /> */}
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default Board;
