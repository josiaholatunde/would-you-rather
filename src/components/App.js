import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Leaderboard from './Leaderboard';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/login' exact component={SignIn} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
