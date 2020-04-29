import React, { Component } from "react";
import * as collectionServices from "../services/collection-services";

class CollectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description } = this.state;
    collectionServices
      .addCollection({
        name,
        description,
      })
      .then(() => {
        this.props.addColl();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div class="container my-5 p-5 form-container collection-form bg-secondary rounded">
        <h1 className="text-center my-4">Add Collection</h1>
        <form>
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
          <textarea
            id="description"
            class="w-100"
            rows="4"
            name="description"
            aria-describedby="emailHelp"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>

          <button
            type="submit"
            className="btn btn-warning d-block mx-auto mt-3"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default CollectionForm;
