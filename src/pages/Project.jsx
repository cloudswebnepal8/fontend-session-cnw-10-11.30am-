import React from 'react'
import { Projects } from '../constants/Project'

function Project() {
  return (
    <div className='bg-gray-200'>
      <div className='pt-20'>
        <h1 className='text-green-500 font-bold md:text-4xl uppercase p-8 text-center'>Projects</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-16 border bg-white border-gray-500 m-10 p-8 rounded-sm'>
          {
            Projects.map((proj) => (
              <div key={proj.id} className='border border-gray-300 text-center p-4'>
                <img src={proj.image} alt={proj.title} className=' md:h-72 md:ml-10 ml-5 rounded-sm max-w-md  w-full object-cover h-60' />

                <h2 className='text-2xl font-bold p-4'>{proj.title}</h2>
                <p className='text-gray-500 p-4 text-justify'>{proj.desc}</p>
              </div>

            )
            )

          }
        </div>
      </div>
    </div>
  )
}

export default Project