import React from "react";
// import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projets here</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
          <a href="https://addysports.netlify.app">
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src="images/AddySports.png"
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-between">
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  React
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Javascript
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  CSS
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Express
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  PSQL
                </button>
              </div>
            </div>
          </a>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src="images/GoldenSolutions.png"
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-between">
            <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  React
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Javascript
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  CSS
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Express
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  PSQL
                </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src="images/volunteer.png"
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  React
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Javascript
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  CSS
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Express
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  PSQL
                </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src="images/volunteer.png"
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  React
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Javascript
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  CSS
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  Express
                </button>
                <button className="w-1/2 px-2 py-3 duration-200 text-gray-500 hover:scale-125 hover:text-gray-300">
                  PSQL
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
