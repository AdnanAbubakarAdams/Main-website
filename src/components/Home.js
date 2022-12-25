import React from 'react'

const Home = () => {
  return (
    <div name="home" className='bg-gradient-to-b from-black via-black to-gray-800 h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <p className='text-cyan-500'>Hi, my name is</p>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> Abubakar Adnan Adams</h2>
                <h3 className='text-2xl sm:text-5xl text-gray-500'> Full Stack Web-Developer</h3>
                <p className='py-4 text-gray-500 max-w-md'>
                    i build websites that your users are going to love, 
                    I am currently working on web applicatiion using technologies like 
                    React, Tailwind, Next JS and PSQL
                </p>
                <div>
                    <button className=" cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white w-fit flex items-center px-6 py-3 rounded-md">
                        Let's make it happen
                    </button>
                </div>
            </div>

            <div>
                <img className="mx-auto w-2/3 md:w-full  rounded-2xl" src="images/Adnan.jpeg" alt='meadnan' />
            </div>
        </div>
    </div>
  )
}

export default Home