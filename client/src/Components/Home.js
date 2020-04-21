import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as linkServices from "../services/link-services";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      listings: null,
      redirectTo: null
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
          <h4>Home</h4>
          <Link to="/add">Add new link</Link>
          {this.state.listings !== null &&
            <div class="container">
              <div class="row">
                {this.state.listings.map((listing) => (
                  <div class="col-sm-4">
                    <h1>{listing.name}</h1>
                    <ReactPlayer url={listing.link} width='100%' height='50%' />
                    <p>{listing.description}</p>
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



