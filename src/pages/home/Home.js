import React from 'react';
import Background from '../../images/background-2.png';

import Headline from './components/Headline';
import Menu from './components/Menu';
import SubContext from './components/SubContext';

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-gray-800 bg-center flex flex-row bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex hidden lg:block lg:w-3/12 lg:h-screen">
        <Menu />
      </div>
      <div className="flex w-full lg:w-6/12 lg:h-screen">
        <Headline />
      </div>
      <div className="flex hidden lg:block lg:w-3/12 lg:h-screen">
        <SubContext />
      </div>
    </div>
  );
};

export default Home;
