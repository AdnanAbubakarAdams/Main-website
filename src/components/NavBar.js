import React, { useState } from "react";
import { FaTimes, FaBars, FaAutoprefixer } from "react-icons/fa/";
// import { ImSwitch } from "react-icons/im";
import { Link } from "react-scroll";

const NavBar = () => {

    const [click, setClick] = useState(false)

  return (
    <div className="bg-black px-4 flex justify-between h-20 w-full items-center text-white fixed ">
      <div>
      <Link to="home" smooth duration={500}>
        {/* <h1 className="font-Adnan cursor-pointer text-5xl ml-2">Adnan</h1> */}
        <FaAutoprefixer className="cursor-pointer text-5xl ml-4 absolute" />
        <span className="relative ml-5 font-bold">3</span>
        </Link>
      </div>
      <ul className="hidden md:flex">
        <Link to="about" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300">about</li>
        </Link>
        <Link to="projects" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300">projects</li>
        </Link>
        <Link to="resume" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300">resume</li>
        </Link>
        <Link to="tech" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300">technologies</li>
        </Link>
        <Link to="contact" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300">contact</li>
        </Link>
        {/* <li><ImSwitch  className="cursor-pointer text-2xl  ml-5"/></li> */}
      </ul>
      <div onClick = {() => setClick(!click)} className="cursor-pointer md:hidden z-10 pr-4 text-gray-500">
        {click ? <FaTimes size={30}/> : <FaBars size={30} />}
      </div>

        {click && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
         <Link onClick={() => setClick(!click)} to="about" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 py-6 text-4xl">about</li>
        </Link>
        <Link  onClick={() => setClick(!click)} to="projects" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 py-6 text-4xl">projects</li>
        </Link>
        <Link  onClick={() => setClick(!click)} to="resume" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 py-6 text-4xl">resume</li>
        </Link>
        <Link  onClick={() => setClick(!click)} to="tech" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 py-6 text-4xl">technologies</li>
        </Link>
        <Link  onClick={() => setClick(!click)} to="contact" smooth duration={500}>
        <li className="cursor-pointer capitalize px-4 py-6 text-4xl">contact</li>
        </Link>
        {/* <li><ImSwitch className="cursor-pointer text-xl mt-5" onClick={() => setDarkMode(!darkMode) }/></li> */}
      </ul>
      )}
    </div>
  );
};

export default NavBar;
