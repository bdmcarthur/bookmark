import React, { Component } from "react";
import API from "../services/API";
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loggedIn: false
        };
    }

    componentDidMount() {
        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }

    logout() {
        API.logout().then((data) => {
            window.location.pathname = "/"
        }).catch((err) => {
            console.log(err)
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
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
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    {this.state.loggedIn ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/profile"
                                    className="btn btn-link text-secondary"
                                >
                                    <span className="text-secondary">Profile</span>
                                </Link>
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
            </nav >
        );
    }
}

export default Navbar;