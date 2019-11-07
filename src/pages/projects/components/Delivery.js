import React from 'react';

const Delivery = () => {
  return (
    <section id="delivery">
      <div className="flex-col my-8">
        <div className="flex items-end justify-around container">
          <div className="flex-col w-4/12 mr-4 pt-8">
            <div className="font-bold text-sm uppercase tracking-widest text-white pt-8 my-4">
              03/03 Development
            </div>
            <div>
              <h3 className="text-xl font-extrabold mb-2">Product Delivery</h3>
              <p className="font-xl mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                cursus felis non massa feugiat, sed euismod elit egestas. Proin
                non elementum orci. Integer ultricies eros sed orci tincidunt,
                vitae faucibus augue luctus. Donec vitae consectetur mi.
              </p>
            </div>
          </div>
          <div className="3/12 ml-2 mt-4">
            <img
              src="https://via.placeholder.com/250x450"
              alt="placehold"
              className="shadow-xl"
            />
          </div>
          <div className="3/12 ml-2 mt-4">
            <img
              src="https://via.placeholder.com/250x450"
              alt="placehold"
              className="shadow-xl"
            />
          </div>
        </div>
        <div className="my-12 pt-4 justify-center flex">
          <img
            src="https://via.placeholder.com/1200x650"
            alt="placehold"
            className="shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Delivery;
