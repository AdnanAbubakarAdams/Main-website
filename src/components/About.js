import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-screen w-full  bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <br />
            <p className='text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
        <h2 className='mt-10 font-bold inline border-b-2 border-gray-500'>Currently Reading</h2>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        <div className='hover:scale-105 duration-500 py-2 rounded-lg'>
          <h5 className='capitalize px-3 py-5'>can't hurt me</h5>
                <img src='images/canthurt.jpeg' alt="" className='w-21 mx-auto'/>
              </div>
        <div className='hover:scale-105 duration-500 py-2 rounded-lg'>
          <h5 className='capitalize px-3 py-5'>can't hurt me</h5>
                <img src='images/canthurt.jpeg' alt="" className='w-21 mx-auto'/>
              </div>
        <div className='hover:scale-105 duration-500 py-2 rounded-lg'>
          <h5 className='capitalize px-3 py-5'>can't hurt me</h5>
                <img src='images/canthurt.jpeg' alt="" className='w-21 mx-auto'/>
              </div>
        </div>
        </div>
        
    </div>
  )
}

export default About;