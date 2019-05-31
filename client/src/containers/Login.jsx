import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';
import "../stylesheets/Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 7;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    // Envia info a la base de datos
    fetch('/profiles/:username', {
    	method: 'GET',
    	params: {
    		username: this.state.username,
    		password: this.state.password
    	}
    }).then(function(response) {
    	return response
    }).then(function(body) {
    	console.log(body);
    });
  }

  render() {
    return (
      <div className="Login">
        	<Form onSubmit={this.handleSubmit}>
          		<Form.Group controlId="username" bsSize="large">
          			<h2>Username</h2>
            		<Form.Control
              		autoFocus
              		type="text"
	  	            value={this.state.username}
              		onChange={this.handleChange}
              		placeholder="Enter your username" />
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
