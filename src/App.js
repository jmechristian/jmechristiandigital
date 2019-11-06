import React from 'react';
import Home from './pages/home/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Project from './pages/projects/Project';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:id" component={Project} />
      </Switch>
    </Router>
  );
};

export default App;
