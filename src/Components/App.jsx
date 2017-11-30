import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1000px-TheHomeDepot.svg.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Goal Coach</h1>
        </header>
        <h1>Hey there!</h1>
        <div><Link to={'/signin'}>Sign in</Link></div>
        <div><Link to={'/signup'}>Sign up</Link></div>
      </div>
    );
  }
}

export default App;

