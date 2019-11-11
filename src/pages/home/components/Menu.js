import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="text-white text-semibold text-xl flex self-center rotate-270">
      <div className="m-16">Client Portal</div>
      <div className="m-16">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="m-16 border-b-4 border-highlight">
        <Link to="/contact">Let's Build</Link>
      </div>
    </div>
  );
};

export default Menu;
