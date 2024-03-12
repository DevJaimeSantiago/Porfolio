import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub color='#ed00ff' size={30} />
        </>
      ),
      href: 'https://github.com/DevJaimeSantiago',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Email <HiOutlineMail color='#ed00ff' size={30} />
        </>
      ),
      href: 'mailto:devjaimesantiago@gmail.com',
      style: 'rounded-br-md',
    },
  ]

  return (
    <div className='hidden lg:flex flex-col fixed top-[50%] translate-y-[-50%] left-0'>
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md ${style}`}>
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              target='_blank'
							rel='noreferrer'>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
