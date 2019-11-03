import React from 'react';
import Background from '../../images/bground.png';

import Headline from './components/Headline';
import Menu from './components/Menu';
import SubContext from './components/SubContext';

const Home = () => {
  return (
    <div
      className="w-screen h-screen bg-gray-800 bg-center flex flex-row bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex w-4/12 lg:h-screen">
        <Menu />
      </div>
      <div className="flex w-4/12 lg:h-screen">
        <Headline />
      </div>
      <div className="flex w-4/12 lg:h-screen">
        <SubContext />
      </div>
    </div>
  );
};

export default Home;
