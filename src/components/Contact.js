import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
                <p className='py-6'>Submit Form To Get In Touch</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="" className='flex flex-col w-full md:w-1/2'>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name"
                      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                      />
                    <input 
                      type="text" 
                      name="email"
                      placeholder="Your Email"
                      className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                      />
                      <textarea name="message" rows="10" placeholder="Enter Message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                      <button className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white mx-auto my-8 flex items-center px-6 py-3 rounded-md hover:scale-110 duration-300">Lets Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact