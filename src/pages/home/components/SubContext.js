import React from 'react';
import Logo from '../../../images/logo_digital-REV.png';

const SubContext = () => {
  return (
    <div className="flex flex-col justify-between w-full items-end my-12 mr-16 pr-6 py-6">
      <div>
        <img src={Logo} width="125" alt="Logo" />
      </div>
      <div className="text-right text-green-400 font-semibold">
        Wordpress.
        <br /> React.
        <br />
        Mobile App <br />
        Development.
      </div>
    </div>
  );
};

export default SubContext;
