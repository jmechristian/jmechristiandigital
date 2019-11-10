import React from 'react';

const Footer = () => {
  return (
    <section id="footer">
      <div className="flex flex-col bg-primary mt-16 items-center py-8 text-center">
        <div className="my-8">
          <h1 className="text-white font-black text-5xl">
            Let's Build Something.
          </h1>
        </div>
        <div className="my-4">
          <button className="text-xl bg-transparent hover:bg-secondary text-white font-semibold hover:text-primary py-2 px-4 border border-white hover:border-transparent rounded">
            Contact Me
          </button>
        </div>
        <div className="mt-12">
          <p className="text-white text-sm opacity-50">
            &copy; 2019 JMEChristianDigital, Centreville, Virginia, All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
