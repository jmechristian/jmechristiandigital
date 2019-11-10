import React from 'react';

const ModalMenu = props => {
  return (
    <div className="flex bg-black w-screen h-screen z-40 absolute opacity-75">
      <button
        className="relative text-white"
        onClick={() => props.closeModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default ModalMenu;
