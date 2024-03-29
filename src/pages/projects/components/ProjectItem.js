import React from 'react';

const ProjectItem = props => {
  return (
    <div
      className="flex flex-col h-56 my-4 container"
      style={{ backgroundColor: `${props.projectColor}` }}
    >
      <div className=" justify-between flex h-full">
        <div className="lg:w-2/12 lg:inline-flex lg:flex-col hidden justify-center">
          <div className="border-white border-b-2"></div>
        </div>
        <div className="lg:w-6/12 w-12/12 ml-6 flex items-center">
          <div className="font-black text-white project-number z-0 absolute opacity-25">
            {props.projectNumber}
          </div>
          <div className="flex flex-col justify-center ml-2 z-20 relative">
            <div className="font-extrabold text-white uppercase text-3xl">
              Project Title
            </div>
            <div className="text-white uppercase text-xs tracking-wide">
              Wordpress UX Mobile
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 md:w-4/12 items-center hidden md:flex">
          <div className="h-24 bg-black text-white px-8 items-center w-full flex">
            <button className="bg-transparent hover:bg-lowlight text-white font-semibold hover:text-primary py-2 px-4 border border-white hover:border-transparent">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
