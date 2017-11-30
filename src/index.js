import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from './firebase';

import App from './Components/App';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import './index.css';

const AppLink = () => (
    <div>App
        <Link to='/'>SignUp</Link>
    </div>
)
const SignInLink = () => (
    <div>SignIn
        <Link to='/'>App</Link>
    </div>
)
const SignUpLink = () => (
    <div>SignUp
        <Link to='/'>SignIn</Link>
    </div>
)

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user);
    } else {
        console.log('user has signed out or still needs to log in')
    }
})

ReactDOM.render(
    <BrowserRouter>
        <div> 
            <Route path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
