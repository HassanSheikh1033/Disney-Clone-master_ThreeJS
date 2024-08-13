import React from 'react'
import  CarDesktop from './Car.jsx'


const Hero = () => {

  return (
    <section className='relative w-full h-screen  mx-auto'>
      <div className={` absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5 '>
          <div className={`w-5 h-5 rounded-full  `} />
          <div className={`w-1 sm:h-80 h-40  `} />
        </div>

        <div>
          <h1 className={`px-[120px] text-white font-bold text-[80px]`}>
           Watch <span className={`text-[#cc3f3f] font-bold text-[80px]`}>Movies</span>
          </h1>
          <p className={`px-[120px] font-thin text-[26px] mt-2 text-white-100 `}>
          Disney movies as portals to fantastical worlds filled  <br className='sm:block hidden' />
          with adventure, learning, and emotional depth.
          </p>
        </div>
      </div>


      <CarDesktop/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-7'>
      </div>
    </section>
  )
}

export default Hero




