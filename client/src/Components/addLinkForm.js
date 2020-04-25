import React, { Component } from "react";
import * as linkServices from "../services/link-services";
import { Redirect } from "react-router-dom";

class addLinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      name: "",
      description: "",
      redirectTo: null,
      board: this.props.match.params.boardId
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let type = "link"
    if (this.state.link.includes("youtube.com")) {
      type = "video"
    }
    else if (this.state.link.includes("jpg") || this.state.link.includes("png")) {
      type = "image"
    }

    const { link, name, description, board } = this.state;

    linkServices.addLink({
      link,
      name,
      description,
      board,
      type
    })
      .then(listing => {
        this.setState({ redirectTo: `/board/${board}` })
      })
      .catch(error => {
        console.log(error)
      });
  };

  render() {

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div class='container my-5 form-container'>
          <h1 className="text-center">Add new link</h1>
          <form>
            <div className="form-group text-left">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                className="form-control"
                autoComplete="link"
                id="link"
                name="link"
                aria-describedby="emailHelp"
                value={this.state.link}
                onChange={this.handleChange}
              ></input>
            </div>

            <div className="form-group text-left">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                autoComplete="name"
                id="name"
                name="name"
                aria-describedby="emailHelp"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </div>
            <label htmlFor="description">Description</label>
            <textarea id="description"
              name="description"
              rows="4"
              class="w-100"
              aria-describedby="emailHelp"
              value={this.state.description}
              onChange={this.handleChange}></textarea>

            <button
              type="submit"
              className="btn btn-warning d-block mx-auto mt-3"
              onClick={this.handleSubmit}
            >
              Add
            </button>
          </form>
        </div>
      )
    }
  }

}

export default addLinkForm;
