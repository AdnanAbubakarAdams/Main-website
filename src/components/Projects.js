import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

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

        <div className="min-h-0 grid-cols-2 gap-8 px-12 sm:px-0">
          <a href="https://addysports.netlify.app">
            <div className="mx-1/2 mx-auto flex items-center mb-14">
              <img
                src="images/AddySports.png"
                alt=""
                className="w-3/5 rounded-md"
              />
              <div className="w-80 sm:w-1/2 h-40 flex bg-gray-300 rounded-lg p-5 -m-48 sm:-ml-10 duration-200 hover:scale-105">
                <div>
                  <h3 className="text-2xl text-teal-600 font-bold">AddySports
                  <span className="flex justify-end text-xl text-black float-right">
                  <a href="https://addysports.netlify.app">
                  <HiExternalLink className=" text-cyan-600  hover:scale-105 hover:text-red-300 cursor-pointer text-xl font-bold"/>
                  </a>
                  <a href="https://github.com/AdnanAbubakarAdams/sports-stand">
                  <FiGithub className="ml-3  text-cyan-600  hover:scale-105 hover:text-red-300 cursor-pointer text-xl font-bold"/>
                  </a>
                  </span>
                  </h3>
                  <p className="text-teal-500">A Web App that connects senior who need a helping hand to voluteers to get daily task done.</p>
                <ul className="text-teal-700 sm:flex justify-between mt-4 hidden">
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">React</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Javascript</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">CSS</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Express</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Firebase</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">PSQL</li>
                </ul>
                </div>
              </div>
            </div>
          </a>

          <a href="https://mygoldensolutions.netlify.app/">
          <div className="mx-1/2 mx-auto flex items-center mb-14">
          <div className="w-80 sm:w-1/2 relative h-40 flex bg-gray-300 rounded-lg p-5 -mr-48  sm:-mr-10 duration-200 hover:scale-105">
                <div>
                <h3 className="text-teal-600 text-2xl font-bold">GoldenSolutions
                <span className="flex justify-end text-xl text-black float-right">
                  <a href="https://mygoldensolutions.netlify.app/">
                <HiExternalLink className=" text-cyan-600  cursor-pointer hover:scale-105 hover:text-red-300 text-xl font-bold"/>
                </a>
                <a href="https://github.com/AdnanAbubakarAdams/capstone-project">
                <FiGithub className="ml-3  text-cyan-600  cursor-pointer hover:scale-105 hover:text-red-300 text-xl font-bold"/>
                </a>
                </span>
                </h3>
                <p className="text-teal-500">A Web App that connects senior who need a helping hand to voluteers to get daily task done.</p>
                <ul className="text-teal-700 sm:flex justify-between mt-4 hidden">
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">React</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Javascript</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">CSS</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Bootstrap</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Express</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Firebase</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">PSQL</li>
                </ul>
                </div>
              </div>
            <img
              src="images/GoldenSolutions.png"
              alt=""
              className="w-3/5 rounded-md"
            />
          </div>
          </a>

          <a href="https://masonmei.wixsite.com/pursuitconnect">
          <div className="mx-1/2 mx-auto flex items-center mb-14">
            <img
              src="images/pursuitconnect.png"
              alt=""
              className="w-3/5 rounded-md"
            />
            <div className="sm:w-1/2 w-80 sm:h-40 flex bg-gray-300 rounded-lg p-5 -m-48 sm:-ml-10 duration-200 hover:scale-105">
                <div>
                <h3 className="text-teal-600 text-2xl font-bold">PursuitConnect
                  <span className="flex justify-end text-xl text-black float-right ">
                  <a href="https://masonmei.wixsite.com/pursuitconnect">
                  <HiExternalLink className=" text-cyan-600  hover:scale-105 hover:text-red-300 cursor-pointer text-xl font-bold"/>
                  </a>
                  <FiGithub className="ml-3  text-cyan-600   hover:scale-105 hover:text-red-300 cursor-pointer text-xl font-bold"/>
                  </span>
                </h3>
                <p className="text-teal-500">A Web App that connects senior who need a helping hand to voluteers to get daily task done.</p>
                <ul className="text-teal-700 sm:flex justify-evenly mt-4 hidden">
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Velo</li>
                  <li className="hover:text-cyan-600  py-2 cursor-pointer">Wix</li>
                </ul>
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
