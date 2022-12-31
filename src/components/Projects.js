import React from "react";
// import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      name="projects"
      className="h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projets here</p>
        </div>

        <div className="min-h-0 sm:grid-cols-2 gap-8 px-12 sm:px-0">
          <a href="https://addysports.netlify.app">
            <div className="mx-1/2 mx-auto flex items-center mb-14">
              <img
                src="images/AddySports.png"
                alt=""
                className="w-3/5 rounded-md duration-200 hover:scale-105"
              />
              <div className="w-1/2 h-40 flex bg-gray-300 rounded-lg p-5 -ml-10">
                {/* <h3>AddySports</h3> */}
                <div>
                  {/* <h3></h3> */}
                </div>
              </div>
            </div>
          </a>
          <div className="mx-1/2 mx-auto flex items-center mb-14">
          <div className="w-1/2 relative h-40 flex bg-gray-300 rounded-lg p-5 -mr-10">
                <div>
                  {/* <h3></h3> */}
                </div>
              </div>
            <img
              src="images/GoldenSolutions.png"
              alt=""
              className="w-3/5 rounded-md duration-200 hover:scale-105"
            />
            {/* <div className="flex items-center justify-between">
            <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  React
            </div> */}
          </div>

          <a href="https://masonmei.wixsite.com/pursuitconnect">
          <div className="mx-1/2 mx-auto flex items-center mb-14">
            <img
              src="images/pursuitconnect.png"
              alt=""
              className="w-3/5 rounded-md duration-200 hover:scale-105"
            />
            <div className="w-1/2 h-40 flex bg-gray-300 rounded-lg p-5 -ml-10">
                <div>
                  {/* <h3></h3> */}
                </div>
              </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
