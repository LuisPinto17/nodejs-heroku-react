import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';
import "../stylesheets/Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 7;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch('/profiles/:username', {
    	method: 'GET',
    	data: {
    		username: this.state.email,
    		password: this.state.password
    	}
    }).then(function(response) {
    	return response.json()
    }).then(function(body) {
    	console.log(body);
    });
  }

  render() {
    return (
      <div className="Login">
        	<Form onSubmit={this.handleSubmit}>
          		<Form.Group controlId="email" bsSize="large">
          			<h2>Username</h2>
            		<Form.Control
              		autoFocus
              		type="email"
	  	            value={this.state.email}
              		onChange={this.handleChange}
              		placeholder="Enter your Email" />
          		</Form.Group>
          		<Form.Group controlId="password" bsSize="large">
            		<h2>Password</h2>
            		<Form.Control
              		value={this.state.password}
              		onChange={this.handleChange}
              		type="password"
              		placeholder="Enter your password" />
          		</Form.Group>
          		<Button
            	block
            	bsSize="large"
            	disabled={!this.validateForm()}
            	type="submit">Login</Button>
        	</Form>
      </div>
    );
  }
}
