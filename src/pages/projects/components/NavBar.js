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
      <div className="flex mb-16 md:pb-8 py-4 items-center container justify-between lg:px-0 px-6">
        <div>
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
    </>
  );
};

export default NavBar;
