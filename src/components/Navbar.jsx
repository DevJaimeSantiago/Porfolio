import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

export function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const Links = [
    {
      id: 1,
      link: 'Inicio',
    },

    {
      id: 2,
      link: 'Portfolio',
    },

    {
      id: 3,
      link: 'Habilidades',
    },
  ]

  return (
    <div className='flex justify-between items-center w-full h-16 fixed text-white bg-gradient-to-r from-[#ed00ff] to-fuchsia-700 px-4'>
      <div>
        <h1 className='text-4xl font-signature ml-2'>DevJaimeSantiago</h1>
      </div>

      <ul className='hidden md:flex'>
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 duration-200 text-lg'>
            <Link
              to={link}
              smooth
              duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={handleNav}
        className='cursor-pointer pr-4 z-10 text-gray-100 md:hidden '>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-fuchsia-700 to-[#ed00ff] text-gray-100 md:hidden'>
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className='px-3 cursor-pointer capitalize py-6 text-xl'>
              <Link
								onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
