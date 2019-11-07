import React from 'react';
import NavBar from './components/NavBar';
import Research from './components/Research';
import Design from './components/Design';
import Colors from './components/Colors';
import Delivery from './components/Delivery';
import Footer from './components/Footer';

const Project = () => {
  return (
    <div className="flex-col justify-center">
      <NavBar />
      <Research />
      <Design />
      <Colors />
      <Delivery />
      <Footer />
    </div>
  );
};

export default Project;
