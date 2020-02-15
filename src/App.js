import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
    <div className='container'>
        <Switch>
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path='/' exact component={Home} />
        </Switch>
    </div>
     </Router>
    </div>
  );
}

export default App;
