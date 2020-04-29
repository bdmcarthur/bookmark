import React, { Component } from "react";
import * as boardServices from "../services/board-services";
import * as collectionServices from "../services/collection-services";
import { Redirect } from "react-router-dom";
import CollectionForm from "./CollectionForm";

class addBoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      redirectTo: null,
      openForm: false,
      addCollection: "",
      collection: "",
      newcollection: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  openForm = () => {
    let curr = this.state.openForm;
    this.setState({
      openForm: !curr,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description } = this.state;
    let collections;
    if (this.state.newcollection.length > 0) {
      collections = this.state.newcollection._id;
    } else {
      collections = this.state.collection;
    }

    boardServices
      .addBoard({
        name,
        description,
        collections,
      })
      .then((listing) => {
        this.setState({ redirectTo: "/" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addColl = (event) => {
    event.preventDefault();
    this.openForm();
    const name = this.state.addCollection;
    collectionServices
      .addCollection({
        name,
      })
      .then((collection) => {
        console.log(collection);
        this.setState({ newcollection: collection.data.collections });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  collection = (event) => {
    if (event.target.value === "create") {
      this.openForm();
    } else {
      this.setState({ collection: event.target.value });
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div class="container my-5 3-5 form-container">
          {this.state.openForm === true && (
            <div class="container bg-secondary rounded">
              <label>Name of Collection</label>
              <input
                type="text"
                className="form-control"
                autoComplete="name"
                id="collection"
                name="addCollection"
                aria-describedby="emailHelp"
                value={this.state.addCollection}
                onChange={this.handleChange}
              ></input>
              <button
                type="submit"
                className="btn btn-warning d-block mx-auto mt-3"
                onClick={this.addColl}
              >
                Add
              </button>
            </div>
          )}
          <h1 className="text-center">Add Board</h1>
          <form>
            <div className="form-group text-left">
              {this.props.collections !== null && (
                <select
                  class="form-control"
                  value={this.state.collection}
                  onChange={this.collection}
                >
                  {this.state.newcollection !== null && (
                    <option value={this.state.newcollection.name}>
                      {this.state.newcollection.name}
                    </option>
                  )}
                  <option value="None">None</option>
                  {this.props.collections.map((collection) => (
                    <option value={collection._id}>{collection.name}</option>
                  ))}
                  <option value="create">Create Collection</option>
                </select>
              )}

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
}

export default addBoardForm;
