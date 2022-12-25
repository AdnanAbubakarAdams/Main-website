import React from 'react'

const Technologies = () => {
  return (
    <div name="tech" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Technologies</p>
                <p className='py-6'>Languages I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
              <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/html.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/css.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/javascript.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-blue-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/react.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-white hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/github.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-blue-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/tailwind.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-green-700 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/node.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-blue-100 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/nextjs.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>NEXT JS</p>
              </div>
              <div className='shadow-md shadow-blue-100 hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src='images/postgres.png' alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>POSTGRES SQL</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies