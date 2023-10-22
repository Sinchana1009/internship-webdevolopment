// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

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
