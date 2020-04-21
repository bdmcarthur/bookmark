import React, { Component } from "react";
import * as linkServices from "../services/link-services";
import { Redirect } from "react-router-dom";

class addForm extends Component {
  constructor() {
    super();
    this.state = {
      link: "",
      name: "",
      description: "",
      redirectTo: null,
    };
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
        this.setState({ redirectTo: "/" })
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
        <div class='container'>
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

            <textarea id="description"
              name="description"
              aria-describedby="emailHelp"
              value={this.state.description}
              onChange={this.handleChange}></textarea>

            <button
              type="submit"
              className="btn btn-primary"
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

export default addForm;
