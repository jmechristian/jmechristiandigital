import React from 'react';

const Project = () => {
  return (
    <div className="flex-col justify-center">
      {/* Navigation */}
      <div className="flex mt-8 mb-12 container">
        <div>Logo</div>
        <div>Menu</div>
      </div>

      <section id="#research">
        <div className="flex container my-16">
          <div className="flex-col w-4/12 mr-8">
            <h1 className="font-extrabold text-5xl mb-8">Project Title</h1>

            <div className="font-bold text-sm uppercase tracking-widest text-gray-600 mb-4">
              01/03 Research
            </div>
            <h3 className="text-xl font-extrabold mb-2">Problem</h3>
            <p className="font-xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              cursus felis non massa feugiat, sed euismod elit egestas. Proin
              non elementum orci. Integer ultricies eros sed orci tincidunt,
              vitae faucibus augue luctus. Donec vitae consectetur mi.
            </p>
            <h3 className="text-xl font-extrabold mb-2">Solution</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              cursus felis non massa feugiat, sed euismod elit egestas. Proin
              non elementum orci. Integer ultricies eros sed orci tincidunt,
              vitae faucibus augue luctus. Donec vitae consectetur mi.
            </p>
          </div>
          <div className="ml-8">
            <img
              src="https://via.placeholder.com/700x500"
              alt="placehold"
              className="shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="#proto">
        <div className="flex flex-col container">
          <div className="w-full mt-8 mb-12">
            <span className="text-4xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              cursus felis non massa feugiat, sed euismod elit egestas.
            </span>
          </div>
          <div className="font-bold text-sm uppercase tracking-widest text-gray-600 my-4">
            02/03 Design
          </div>
          <h3 className="text-xl font-extrabold mb-2">
            Wireframes + Prototypes
          </h3>
          <div className="flex flex-wrap my-4">
            <div className="w-4/12 mb-4">
              <img
                src="https://via.placeholder.com/400x250"
                alt="placehold"
                className="shadow-xl"
              />
            </div>
            <div className="w-4/12 mb-4">
              <img
                src="https://via.placeholder.com/400x250"
                alt="placehold"
                className="shadow-xl"
              />
            </div>
            <div className="w-4/12 mb-4">
              <img
                src="https://via.placeholder.com/400x250"
                alt="placehold"
                className="shadow-xl"
              />
            </div>
            <div className="w-4/12 mb-4">
              <img
                src="https://via.placeholder.com/400x250"
                alt="placehold"
                className="shadow-xl"
              />
            </div>
            <div className="w-4/12 mb-4">
              <img
                src="https://via.placeholder.com/400x250"
                alt="placehold"
                className="shadow-xl"
              />
            </div>
            <div className="w-4/12 mb-4">
              <img
                src="https://via.placeholder.com/400x250"
                alt="placehold"
                className="shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="#colors">
        <div className="flex my-12 h-64 pb-8">
          <div className="bg-blue-800 w-1/4 flex justify-center">
            <div className="self-center font-bold text-3xl text-white py-8">
              #45tggh
            </div>
          </div>
          <div className="bg-green-300 w-1/4 flex justify-center">
            <div className="self-center font-bold text-3xl text-white py-8">
              #ff4433
            </div>
          </div>
          <div className="bg-yellow-400 w-1/4 flex justify-center">
            <div className="self-center font-bold text-3xl text-white py-8">
              #yt7789
            </div>
          </div>
          <div className="bg-blue-300 w-1/4 flex justify-center">
            <div className="self-center font-bold text-3xl text-white">
              #ffgb67
            </div>
          </div>
        </div>
      </section>

      <section id="delivery">
        <div className="flex-col my-8">
          <div className="flex items-center justify-around container">
            <div className="flex-col w-4/12 mr-4 pt-8">
              <div className="font-bold text-sm uppercase tracking-widest text-white pt-8 my-4">
                03/03 Development
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-2">
                  Product Delivery
                </h3>
                <p className="font-xl mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean cursus felis non massa feugiat, sed euismod elit
                  egestas. Proin non elementum orci. Integer ultricies eros sed
                  orci tincidunt, vitae faucibus augue luctus. Donec vitae
                  consectetur mi.
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
    </div>
  );
};

export default Project;
