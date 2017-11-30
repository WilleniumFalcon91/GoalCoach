import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebaseApp from 'firebase';
import AddGoal from './AddGoal';
import GoaList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

import '../App.css';

class App extends Component {
  signOut() {
        firebaseApp.auth().signOut();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1000px-TheHomeDepot.svg.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Goal Coach</h1>
        </header>
        <h3>Goals</h3>
        <AddGoal/>
        <hr/>
        <GoaList/>
        <hr/>
        <h4>Completed Goals</h4>
        <CompleteGoalList/>
        <hr/>
        <div><Link to={'/signin'}>Sign in</Link></div>
        <div><Link to={'/signup'}>Sign up</Link></div>
        <button
            className="btn btn-danger"
            onClick={() => this.signOut()}
        >
            Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, null)(App);

