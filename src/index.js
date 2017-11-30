import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from './firebase';
import { logUser } from './Actions';
import reducer from './Reducers'

import App from './Components/App';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import './index.css';

const store = createStore(reducer);



firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        const { email } = user;
        store.dispatch(logUser(email));
    }
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div> 
            <Route path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
