import React from 'react';
import Home from './pages/home/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Project from './pages/projects/Project';
import ProjectHome from './pages/projects/ProjectHome';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/:id" component={Project} />
        <Route exact path="/projects/" component={ProjectHome} />
      </Switch>
    </Router>
  );
};

export default App;
