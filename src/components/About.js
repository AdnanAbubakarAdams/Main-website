import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl text-gray-400 mt-2">
          Hi there! My name is Adnan and I am a recent graduate of the Pursuit
          Fellowship, where I had the opportunity to learn a variety of
          programming languages and technologies. During the fellowship, I
          focused on learning <em className="text-cyan-300">HTML</em>,
          <em className="text-cyan-300">CSS</em>,
          <em className="text-cyan-300">Javascript</em>,
          <em className="text-cyan-300">Node</em>,
          <em className="text-cyan-300">React</em>, and
          <em className="text-cyan-300">Tailwind</em>. I also gained experience
          with <em className="text-cyan-300">SQL</em> and
          <em className="text-cyan-300">Express</em>, and had the chance to
          practice pair programming with my fellow cohort members. I am excited
          to use my newfound skills to build dynamic, user-friendly websites and
          web applications. In my free time, I enjoy staying up-to-date on the
          latest developments in the tech industry and learning about new
          programming languages and frameworks. Thank you for visiting my
          website. I look forward to connecting with other developers and
          exploring new opportunities in the field.
        </p>
        <p className="mt-8 text-2xl font-bold border-gray-500">
          Currently Reading...
        </p>
        <div className="w-full mb-72 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="hover:scale-105 duration-500 py-2 rounded-lg">
            <h5 className="capitalize px-3 py-5">can't hurt me</h5>
            <img src="images/canthurt.jpeg" alt="" className="w-21 mx-auto md:h-72" />
          </div>
          <div className="hover:scale-105 duration-500 py-2 rounded-lg">
            <h5 className="capitalize px-3 py-5">Clean Code</h5>
            <img src="images/cleancode.png" alt="" className="w-21 mx-auto md:h-72" />
          </div>
          <div className="hover:scale-105 duration-500 py-2 rounded-lg">
            <h5 className="capitalize px-3 py-5">The 15 Invaluable Rules of Growth</h5>
            <img src="images/ValuableRules.png" alt="" className="w-21 mx-auto md:h-72" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
