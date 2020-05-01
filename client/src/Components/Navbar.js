import React, { Component } from "react"
import API from "../services/API";
import { Link } from "react-router-dom";

class Navbar extends Component {

  logout = (event) => {
    event.preventDefault();
    AuthenticationServices.logOutService()
      .then((response) => {
        if (response.status === 200) {
          this.props.updateUser({
            user: null,
          });
          this.setState({
            redirectTo: "/",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let user = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="btn btn-link text-secondary">
          <i class="fas fa-coffee"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {user ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="#"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">Log Out</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Login</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
