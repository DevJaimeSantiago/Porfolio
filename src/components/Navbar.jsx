import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const Links = [
    {
      id: 1,
      link: 'Home',
    },

    {
      id: 2,
      link: 'Portfolio',
    },

    {
      id: 3,
      link: 'Experience',
    },
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 fixed text-white bg-gradient-to-r from-[#ed00ff] to-fuchsia-700 px-4'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>JaimeSantiago</h1>
      </div>

      <ul className='hidden md:flex'>
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 duration-200 text-lg'>
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={handleNav}
        className='cursor-pointer pr-4 z-10 text-gray-100 md:hidden '>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-fuchsia-700 to-[#ed00ff] text-gray-100 md:hidden'>
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-3xl'>
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
