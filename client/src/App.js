import React, { Component } from 'react';
import logo from './logo.svg';
import '../stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/Login';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component = {Login}/>
        <Route path="login" component = {Login}/>
    </Router>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
