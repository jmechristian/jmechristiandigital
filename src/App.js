import React from 'react';
import Home from './pages/home/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Project from './pages/projects/Project';
import ProjectHome from './pages/projects/ProjectHome';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/projects/:id" component={Project} />
        <Route exact path="/projects/" component={ProjectHome} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
