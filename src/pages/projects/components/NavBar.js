import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo_digital.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ModalMenu from '../../../ModalMenu';

const NavBar = () => {
  const [open, openModal] = useState(false);

  const closeModal = childData => openModal(childData);

  return (
    <>
      {open && <ModalMenu closeModal={closeModal} />}
      <div className="flex pb-8 py-4 md:py-6 items-center container justify-between lg:px-0 px-8">
        <div className="pt-2">
          <Link to="/">
            <img src={Logo} alt="logo" width="100" />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => openModal(true)}>
            <FontAwesomeIcon icon={faBars} size="2x" color="black" />
          </button>
        </div>
        <div className="flex hidden md:inline-flex">
          <div>
            <span className="text-lg font-semibold mx-8">
              <Link to="/portal">Client Portal</Link>
            </span>
          </div>
          <div>
            <span className="text-lg font-semibold mx-8">
              <Link to="/projects">Projects</Link>
            </span>
          </div>
          <div>
            <span className="text-lg font-semibold mx-8 border-b-4 border-highlight">
              <Link to="/contact">Let's Build</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
