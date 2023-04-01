import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
    <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='https://twitter.com' className='flex justify-between items-center w-full rounded-tr-md text-white'><>Twitter <FaTwitter size={30}/></> </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='https://www.linkedin.com/in/adnan-abubakar-adams/' className='flex justify-between items-center w-full text-white'><>LinkedIn <FaLinkedin size={30}/></> </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='https://github.com/AdnanAbubakarAdams' className='flex justify-between items-center w-full text-white'><>Github <FaGithub size={30}/></> </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='mailto:abubakaradnanadams@pursuit.org' className='flex justify-between items-center w-full text-white'><>Mail <HiOutlineMail size={30}/></> </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='/resume.pdf' className='flex justify-between items-center w-full rounded-tr-md text-white'><>Resume <BsFillPersonLinesFill size={30}/></> </a>
        </li>
    </ul>
    </div>
  )
}

export default Social;