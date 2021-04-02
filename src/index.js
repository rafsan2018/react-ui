import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Booking from './components/booking';
import Accounts from './components/Accounts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
        <Router>
          <Switch>
            <Route path="/" exact component={App}></Route>
            <Route path="/booking" exact component={Booking}></Route>
            <Route path="/account" exact component={Accounts}></Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
