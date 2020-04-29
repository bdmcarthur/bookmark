import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as boardServices from "../services/board-services";
import * as linkServices from "../services/link-services";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
class Collection extends Component {
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
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <h1>Collect</h1>
        </div>
      );
    }
  }
}



export default Collection;



