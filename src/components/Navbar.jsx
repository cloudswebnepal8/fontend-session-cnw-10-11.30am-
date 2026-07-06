import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
     {
      name: "Projects",
      path: "/project"
    },
    {
      name: "Contact",
      path: "/contact"
    },
  ]
  return (
    <nav className='bg-green-500 text-white fixed w-full md:p-3'>
      <div className='flex justify-between'>

        <NavLink to="/" className="flex gap-2 items-center p-2">
          <img src="/bpic.jpg" alt="image" className='h-10' />
          <h1>Ajay Kumar Shrestha</h1>

        </NavLink>

        <button onClick={() => setOpen(!open)} className='font-bold md:hidden text-2xl hover:scale-110 transition duration-700 ease-in-out bg-blue-500 p-2 m-2'>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>

        <ul className='md:flex hidden gap-3 mt-4 mr-10'>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>

            ))
          }
        </ul>

      </div>

      {
        open &&
        <ul className='md:hidden border-t-2 border-gray-200 space-y-4 p-4 font-bold text-sm'>
          {
            navLinks.map((link, index) => (
              <li key={index} className='hover:scale-103 transition duration-700 ease-in-out'>
                <Link to={link.path} onClick={()=>setOpen(false)}>{link.name}</Link>
              </li>

            ))
          }
        </ul>
      }
    </nav>
  )
}

export default Navbar