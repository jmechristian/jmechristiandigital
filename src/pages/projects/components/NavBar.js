import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo_digital.png';

const NavBar = () => {
  return (
    <div className="flex mt-8 mb-16 md:pb-8 pb-4 items-center container justify-between border-b-4 lg:px-0 px-6 border-black">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" width="100" />
        </Link>
      </div>
      <div className="flex hidden md:inline-flex">
        <div>
          <span className="text-lg font-semibold mx-8">Client Portal</span>
        </div>
        <div>
          <span className="text-lg font-semibold mx-8">Projects</span>
        </div>
        <div>
          <span className="text-lg font-semibold mx-8 border-b-4 border-highlight">
            Let's Build
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
