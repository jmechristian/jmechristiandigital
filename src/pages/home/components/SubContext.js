import React from 'react';
import Logo from '../../../images/logo_digital-REV.png';

const SubContext = () => {
  return (
    <div className="flex flex-col lg:h-screen justify-between  items-end py-16 mr-16">
      <div>
        <img src={Logo} width="145" alt="Logo" />
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
