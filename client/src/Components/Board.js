import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as boardServices from "../services/board-services";
import * as linkServices from "../services/link-services";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      redirectTo: null,
      listings: null
    };
  }

  componentDidMount = () => {
    linkServices.getLinks()
      .then(listing => {
        let filtered = listing.data.listing.filter(item => item.board === this.props.match.params.id
        )

        this.setState({ listings: filtered })
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    let boardID = this.props.match.params.id
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          {this.state.listings !== null &&
            <div class="container">
              <Link to={`/${boardID}/link/add`}><i class="fas fa-plus-circle fa-2x text-right d-block mt-5"></i></Link>
              <div class="row align-items-center">
                {this.state.listings.map((listing) => (
                  <div class="col-6 col-md-4 mt-4">
                    <div class="card text-center border-0" style={{ width: "100%" }}>
                      {listing.type == 'video'
                        ? <ReactPlayer url={listing.link} width='100%' height='190px' />
                        : <img class="image-card" src={listing.link}></img>
                      }
                      <div class="card-body">
                        <h4 class="card-title">{listing.name}</h4>
                        <p class="card-text">{listing.description}</p>
                      </div>
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



export default Board;



