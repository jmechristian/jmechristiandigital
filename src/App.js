import React from 'react';
import Home from './pages/home/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Auth';

import Project from './pages/projects/Project';
import ProjectHome from './pages/projects/ProjectHome';
import Contact from './pages/contact/Contact';
import Portal from './pages/portal/Portal';
import Login from './pages/portal/components/Login';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects/:id' component={Project} />
        <Route exact path='/projects/' component={ProjectHome} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Switch>
          <PrivateRoute exact path='/portal' component={Portal} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
