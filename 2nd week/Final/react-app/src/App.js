// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
