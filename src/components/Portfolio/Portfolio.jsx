import ScreenPortfolio from '../../assets/portfolio/Portfolio.png'

export function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: ScreenPortfolio,
      demo: 'https://porfolio-devjaimesantiago.netlify.app/',
      code: 'https://github.com/DevJaimeSantiago/Porfolio',
    },
  ]

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-r from-[#ed00ff] to-fuchsia-700 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <header className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white'>
            Portfolio
          </p>
          <p className='py-6 text-lg'>Mira algunos de mis trabajos aquí.</p>
        </header>

        <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className='border-[1px] border-black shadow-lg shadow-fuchsia-300 rounded-lg'>
              <img
                src={src}
                alt='mi portfolio'
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a
                  href={demo}
                  target='_blank'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Demo
                  </button>
                </a>
                <a
                  href={code}
                  target='_blank'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
