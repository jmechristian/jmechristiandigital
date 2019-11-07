import React from 'react';

const Colors = () => {
  return (
    <section id="#colors">
      <div className="flex my-12 h-96 pb-8">
        <div className="bg-primary w-1/4 flex justify-center">
          <div className="self-center font-bold text-3xl text-white py-8">
            #45tggh
          </div>
        </div>
        <div className="bg-secondary w-1/4 flex justify-center">
          <div className="self-center font-bold text-3xl text-white py-8">
            #ff4433
          </div>
        </div>
        <div className="bg-highlight w-1/4 flex justify-center">
          <div className="self-center font-bold text-3xl text-white py-8">
            #yt7789
          </div>
        </div>
        <div className="bg-lowlight w-1/4 flex justify-center">
          <div className="self-center font-bold text-3xl text-white">
            #ffgb67
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colors;
