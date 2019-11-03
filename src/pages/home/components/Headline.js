import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Headline = () => {
  return (
    <div className="flex flex-col self-center">
      <div className="font-black headline-text text-white text-center my-8">
        <span className="text-blue-300 block">Process Driven</span>Digital
        Design
      </div>
      <div className="text-center my-8">
        <div className="text-white font-bold text-3xl">The Work</div>
        <div>
          <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Headline;
