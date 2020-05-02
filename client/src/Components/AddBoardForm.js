// import React, { Component } from "react";
// import * as boardServices from "../services/board-services";
// import * as collectionServices from "../services/collection-services";
// import { Redirect } from "react-router-dom";
// import CollectionForm from "./AddCollectionForm";

// class addBoardForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       description: "",
//       redirectTo: null,
//       openForm: false,
//       addCollection: "",
//       collection: "",
//       newCollection: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   openForm = () => {
//     let curr = this.state.openForm;
//     this.setState({
//       openForm: !curr,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, description } = this.state;
//     let collections;
//     if (this.state.newcollection.length > 0) {
//       collections = this.state.newcollection._id;
//     } else {
//       collections = this.state.collection;
//     }
//     boardServices
//       .addBoard({
//         name,
//         description,
//         collections,
//       })
//       .then((listing) => {
//         this.setState({ redirectTo: "/" });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   addCollection = (event) => {
//     event.preventDefault();
//     const name = this.state.addCollection;
//     collectionServices
//       .addCollection({
//         name,
//       })
//       .then((collection) => {
//         this.setState({ newCollection: collection.data.collections });
//         this.openForm();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   collection = (event) => {
//     if (event.target.value === "create") {
//       this.openForm();
//     } else {
//       this.setState({ collection: event.target.value });
//     }
//   };

//   render() {
//     if (this.state.redirectTo) {
//       return <Redirect to={{ pathname: this.state.redirectTo }} />;
//     } else {
//       return (
//         this.props.collections && (
//           <div class="container my-5 3-5 form-container">
//             {this.state.openForm === true && (
//               <div class="container bg-secondary rounded">
//                 <label>Name of Collection</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   autoComplete="name"
//                   id="collection"
//                   name="addCollection"
//                   aria-describedby="emailHelp"
//                   value={this.state.addCollection}
//                   onChange={this.handleChange}
//                 ></input>
//                 <button
//                   type="submit"
//                   className="btn btn-warning d-block mx-auto mt-3"
//                   onClick={this.addCollection}
//                 >
//                   Add
//                 </button>
//               </div>
//             )}
//             <h1 className="text-center">Add Board</h1>
//             <form>
//               <div className="form-group text-left">
//                 {this.props.collections.length > 0 ? (
//                   <div>
//                     <label for="sel1">Select list (select one):</label>
//                     <select
//                       class="form-control my-3"
//                       value={this.state.collection}
//                       onChange={this.collection}
//                     >
//                       {this.state.newCollection !== null && (
//                         <option value={this.state.newCollection.name}>
//                           {this.state.newCollection.name}
//                         </option>
//                       )}
//                       {this.props.collections.map((collection, index) => (
//                         <option value={collection._id}>
//                           {collection.name}
//                         </option>
//                       ))}
//                       <option value="create">Create Collection</option>
//                     </select>
//                   </div>
//                 ) : (
//                   <div>
//                     <label for="sel1">Select aCollection:</label>
//                     <select
//                       class="form-control my-3"
//                       value={this.state.collection}
//                       onChange={this.collection}
//                     >
//                       <option value="main">Main</option>
//                       <option value="create">Create Collection</option>
//                     </select>
//                   </div>
//                 )}

//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   autoComplete="name"
//                   id="name"
//                   name="name"
//                   aria-describedby="emailHelp"
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                 ></input>
//               </div>
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 class="w-100"
//                 rows="4"
//                 name="description"
//                 aria-describedby="emailHelp"
//                 value={this.state.description}
//                 onChange={this.handleChange}
//               ></textarea>

//               <button
//                 type="submit"
//                 className="btn btn-warning d-block mx-auto mt-3"
//                 onClick={this.handleSubmit}
//               >
//                 Add
//               </button>
//             </form>
//           </div>
//         )
//       );
//     }
//   }
// }

// export default addBoardForm;

import React, { Component } from "react";
import * as boardServices from "../services/board-services";
import * as collectionServices from "../services/collection-services";
import { Redirect } from "react-router-dom";
import CollectionForm from "./AddCollectionForm";

class addBoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      redirectTo: null,
      openForm: false,
      addCollection: "",
      collection: null,
      newCollection: null,
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

    if (this.state.collection === null) {
      collections = this.props.match.params.collectionID;
    } else {
      collections = this.state.collection;
    }

    boardServices
      .addBoard({
        name,
        description,
        collections,
      })
      .then((board) => {
        console.log(board.data);
        this.setState({ redirectTo: `/board/${board.data.boards._id}` });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addCollection = (event) => {
    event.preventDefault();
    const name = this.state.addCollection;
    collectionServices
      .addCollection({
        name,
      })
      .then((collection) => {
        this.setState({
          newCollection: collection.data.collections,
          collection: collection.data.collections._id,
        });
        this.openForm();
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
    let currentCollection;
    let filteredCollection;
    if (this.props.collections && this.props.collections.length > 0) {
      currentCollection = this.props.collections.filter(
        (collection) => collection._id === this.props.match.params.collectionID
      );
      filteredCollection = this.props.collections.filter(
        (collection) => collection._id !== this.props.match.params.collectionID
      );
    }

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        this.props.collections && (
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
                  onClick={this.addCollection}
                >
                  Add
                </button>
              </div>
            )}
            <h1 className="text-center">Add Board</h1>
            <form>
              <div className="form-group text-left">
                <div>
                  <label for="sel1">Select Collection:</label>
                  <select
                    class="form-control my-3"
                    value={this.state.collection}
                    onChange={this.collection}
                  >
                    {this.state.newCollection !== null && (
                      <option value={this.state.newCollection._id}>
                        {this.state.newCollection.name}
                      </option>
                    )}
                    <option value={currentCollection[0]._id}>
                      {currentCollection[0].name}
                    </option>

                    {filteredCollection.map((collection, index) => (
                      <option value={collection._id}>{collection.name}</option>
                    ))}
                    <option value="create">Create Collection</option>
                  </select>
                </div>
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
        )
      );
    }
  }
}

export default addBoardForm;
