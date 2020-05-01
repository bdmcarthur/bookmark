import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from "react-router-dom";


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      redirectTo: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, name } = this.state;
    AuthenticationServices.signUpService({
      username,
      password,
      name,
    })
      .then((user) => {
        this.props.updateUser({
          loggedIn: true,
          user: user,
        });
        this.setState({
          redirectTo: "/",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container mt-4">
          <h4>Sign up</h4>
          <form>
            <div className="form-group text-left">
              <label htmlFor="username">Email address</label>
              <input
                type="email"
                className="form-control"
                autoComplete="username"
                id="username"
                name="username"
                aria-describedby="emailHelp"
                value={this.state.username}
                onChange={this.handleChange}
              ></input>
            </div>

    confirmPassword() {
        if (this.props.password === this.props.confirmPassword && !this.state.confirmPassword && this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.props.password !== this.props.confirmPassword && this.state.confirmPassword) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    render() {
        return (
            <div class="container">
                <h2 className="loginTitle title-font">Signup</h2>
                <hr />
                {this.props.message ? (
                    <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                ) : (<></>)}
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" value={this.props.confirmPassword} onChange={this.props.handleInputChange} valid={this.state.confirmPassword} />
                        <FormText>at least 8 characters, 1 capital & 1 number</FormText>
                    </FormGroup>
                    {/* if all fields are valid, allow the user to submit the form */}
                    {(this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                        <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                    ) : (
                            <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                        )}
                    <p className="signupLink">
                        <Link to="/login">Already have an account?  Sign in here</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Signup;