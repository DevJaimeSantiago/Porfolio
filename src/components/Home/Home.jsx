import HeroImage from '../../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export function Home() {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-r from-[#ed00ff] to-fuchsia-700'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white gap-1'>
        <div className='flex flex-col justify-center h-full'>
          <header className='text-center'>
            <h2 className='text-2xl sm:text-5xl font-bold'>Jaime Santiago Santiago</h2>
            <h3 className='text-xl sm:text-4xl font-bold text-gray-300'>FrontEnd Developer</h3>
          </header>
          <p className='text-center md:text-left text-lg py-4'>
            Tengo experiencia creando aplicaciones web. Actualmente me encanta
            trabajar utilizando tecnologías como ReactJS, Tailwind CSS y Material UI.
          </p>

          <div>
            <button className='group w-fit text-lg px-6 py-3 my-2 flex items-center rounded-md shadow-md bg-fuchsia-700 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt='mi perfil'
						className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  )
}
