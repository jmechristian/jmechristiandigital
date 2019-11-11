import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ModalMenu = props => {
  return (
    <div className="flex flex-col bg-primary w-screen h-screen z-40 absolute justify-between p-8">
      <div>
        <button
          className="relative text-white"
          onClick={() => props.closeModal(false)}
        >
          <FontAwesomeIcon icon={faTimes} size="3x" color="white" />
        </button>
      </div>
      <div className="text-white font-bold text-6xl flex justify-center w-full leading-tight">
        <Link to="/">Client Portal</Link>
      </div>
      <div className="text-white font-bold text-6xl leading-tight ">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="text-white font-bold text-6xl mb-4 leading-tight ">
        <Link to="/contact">Let's Build</Link>
      </div>
    </div>
  );
};

export default ModalMenu;
