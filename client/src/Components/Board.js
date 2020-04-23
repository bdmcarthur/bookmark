import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as boardServices from "../services/board-services";
import * as linkServices from "../services/link-services";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
class Home extends Component {
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
        this.setState({ listings: listing.data.listing })
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
              <Link to={`/${boardID}/link/add`} className="btn btn-link text-danger">Add new link </Link>
              <div class="row">
                {this.state.listings.map((listing) => (
                  <div class="col-sm-4">
                    <div class="card text-center border-0" style={{ width: "18rem" }}>
                      <h4 class="card-title">{listing.name}</h4>
                      <ReactPlayer url={listing.link} width='100%' height='80%' />
                      <div class="card-body">
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



export default Home;



