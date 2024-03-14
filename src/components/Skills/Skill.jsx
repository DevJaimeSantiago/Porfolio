import Css from '../../assets/css.png'
import Github from '../../assets/github.png'
import Html from '../../assets/html.png'
import Js from '../../assets/javascript.png'
import ReactImage from '../../assets/react.png'
import Tailwind from '../../assets/tailwind.png'

export function Skills() {
  const skillList = [
		{
      id: 1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-300',
    },
		{
      id: 2,
      src: Css,
      title: 'CSS',
      style: 'shadow-blue-300',
    },
		{
      id: 3,
      src: Js,
      title: 'JavaScript',
      style: 'shadow-yellow-300',
    },
		{
      id: 4,
      src: ReactImage,
      title: 'React',
      style: 'shadow-blue-400',
    },
		{
      id: 5,
      src: Tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-200',
    },
		{
      id: 6,
      src: Github,
      title: 'Github',
      style: 'shadow-gray-200',
    },
		
  ]
  return (
    <div
      name='skills'
      className='bg-gradient-to-r from-[#ed00ff] to-fuchsia-700 w-full h-auto sm:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <header>
          <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>
            Habilidades
          </p>
          <p className='text-lg py-6'>
            Estas son las technologies con las que trabajado.
          </p>
        </header>

        <section className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {skillList.map(({ id, src, title, style }) => (
            <div key={id} className={`border-[1px] border-black shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img
                src={src}
                alt={`${title} skill image`}
                className='w-20 mx-auto'
              />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
