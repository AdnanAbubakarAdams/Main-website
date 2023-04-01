import React from "react";

const MyProjects = () => {

    // PROJECTS ARRAY
    const projects = [
        {
            id: 1, 
            image: "images/HomePage.png",
            title: "Golden Solutions",
            stack: "React | Javascript | CSS | Bootstrap | Express | PSQL | Firebase",
            paragraph: "An app that helps connect Elderly people to Volunteers, who will help them get some of their simple daily tasks done.",
            live: "https://mygoldensolutions.netlify.app/",
            github: "https://github.com/AdnanAbubakarAdams/capstone-project"
        },
        {
            id: 2, 
            image: "images/AddySports.png",
            title: "Sports Stand",
            stack: "React | Javascript | CSS | Bootstrap | Express | PSQL | Firebase",
            paragraph: "An app that allows users to post share their opinions on who the best athlete is, and also who their Idol is",
            live: "https://addysports.netlify.app",
            github: "https://github.com/AdnanAbubakarAdams/sports-stand"
        },
        {
            id: 3, 
            image: "images/pursuitconnect.png",
            title: "Pursuit Connect",
            stack:  "Velo | Wix | React | Javascript | HTML | CSS",
            paragraph: `1st Place Winner for Pursuit Hackathon hosted by Major League
            Hacking. With a team of 5 over a span of a weekend we created
            this social networking app for Pursuit fellows and Recruiters
            using Velo by Wix. Features include forums, job postings, news
            feed, live chat, online courses, community events as well as
            gamified profiles using badges earned through achievements
            within the application.`,
            live: "https://masonmei.wixsite.com/pursuitconnect",
            github: ""
        }
    ];


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
          {projects.map(({ id, image, paragraph, stack, title, live, github}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h3 className="flex items-center justify-center text-2xl px-6 py-2 font-bold">{title}</h3>
              <div className="flex items-center justify-center">
                <a  href={live} className="px-8 py-2 m-4 duration-200 hover:scale-105">
                  LiveSite
                </a>
                <a href={github} className="px-8 py-2 m-4 duration-200 hover:scale-105">
                  GitHub
                </a>
              </div>
              <p className="text-teal-300 ml-8 items-center">{stack}</p>
              <p className="px-8 mb-2">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;




