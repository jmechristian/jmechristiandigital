import React from 'react';
import Home from './pages/home/Home';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
