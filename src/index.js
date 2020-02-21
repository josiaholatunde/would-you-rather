import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import store from './store'
import { setAuthedUser } from './actions/authedActions';

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  store.dispatch(setAuthedUser(user))
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


