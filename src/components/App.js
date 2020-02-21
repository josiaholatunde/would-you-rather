import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Notification from '../utils/Notifications'
import  handleInitialData from '../actions/shared'
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';
import SignIn from './SignIn';
import Dashboard  from './Dashboard';
import QuestionDetails from './QuestionDetails';
import AddPoll  from './AddPoll';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Register from './Register';
import Loader from './Loader';


class App extends Component {

  componentDidMount() {
      this.props.handleInitialData()
  }
  render() {
    return (
      <div className="App">
          <Router>
            <Navbar />
            <Loader />
            <Notification />
            <div className='container'>
              <Switch>
                <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
                <PrivateRoute path='/add' exact component={AddPoll} />
                <PrivateRoute path='/questions/:id' exact component={QuestionDetails} />
                <Route path='/login' exact component={SignIn} />
                <Route path='/register' exact component={Register} />
                <PrivateRoute path='/' exact component={Dashboard} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default connect(null, { handleInitialData })(App);
