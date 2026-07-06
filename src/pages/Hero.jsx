import React from 'react'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='min-h-screen flex justify-between items-center px-10 bg-zinc-600 text-white'>
      <div className='flex md:flex-row flex-col-reverse justify-between w-full items-center gap-16'>
        {/* left contents  */}
        <div className='max-w-3xl text-center'>
          {/* name  */}
          <h1 className='text-3xl font-bold p-4 text-green-400'>Ajay Kumar Shrestha</h1>
          {/* position  */}
          <h2 className='p-2'>Full Stack Developer</h2>
          {/* short intro  */}
          <p className='p-2'>I design and develop highly scalable web applications using MongoDB , Express ,React and Nodejs.</p>

          <div>
            <a href="/cv.pdf" download>
              <button className='bg-green-500 p-3 m-2 font-bold'>Download CV</button>
            </a>

            <Link to="/contact">
              <button className='bg-green-500 p-3 m-2 font-bold'>Contact US</button>
            </Link>

          </div>
        </div>


        {/* right contents i.e. image  */}
        <div>
          <img src="/bpic.jpg" alt="profile" className='rounded-full md:h-72 md:w-72 h-50 w-50 mr-10' />
        </div>
      </div>
    </div>
  )
}

export default Hero