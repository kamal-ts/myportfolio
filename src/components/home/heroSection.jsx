/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const heroSection = () => {

  const profile = '/img/profile.png';

  return (

    <div className='container lg:px-28'>
      <div className='flex flex-col md:flex-row justify-between items-center md:hidden'>
        <div className='w-full px-4 lg:w-auto flex justify-center'>
          <div className='relative'>
            <img src={profile} alt="kamaluddin" className='max-w-xs lg:max-w-sm mx-auto rounded-full' />
            <span className='absolute top-1/2 -translate-y-1/2 -z-10 left-1/2 -translate-x-1/2 origin-center -rotate-180'>
              <svg width={400} height={400} className='lg:scale-125' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6366f1" d="M43.3,24.1C29.8,48.4,-25.6,47.5,-39.8,22.8C-54,-1.9,-27,-50.4,0.7,-50C28.4,-49.6,56.8,-0.2,43.3,24.1Z" transform="translate(100 100) scale(1.6)" />
              </svg>
            </span>
          </div>
        </div>
        <div className='w-full px-4 mt-10'>
          <h1 className='text-base font-semibold text-indigo md:text-xl'>Hallo Semua 👋, saya
            <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>La Ode Kamaluddin</span></h1>
          <h2 className='font-medium text-secondary text-lg mb-2 lg:text-2xl'>Web Developer</h2>
          <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fuga?</p>
          <a href="#" className='text-base font-semibold text-white bg-indigo py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Hubungi saya</a>
        </div>
      </div>
      <div className='md:flex flex-col md:flex-row justify-between items-center hidden'>
        <div className='w-full px-4'>
          <h1 className='text-base font-semibold text-indigo md:text-xl'>Hallo Semua 👋, saya
            <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>La Ode Kamaluddin</span></h1>
          <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'>Web Developer</h2>
          <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fuga?</p>
          <a href="#" className='text-base font-semibold text-white bg-indigo py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Hubungi saya</a>
        </div>
        <div className='w-full px-4 lg:w-auto flex justify-center'>
          <div className='relative mt-10 lg:mt-9'>
            <img src={profile} alt="kamaluddin" className='max-w-xs lg:max-w-sm mx-auto rounded-full' />
            <span className='absolute top-1/2 -translate-y-1/2 -z-10 left-1/2 -translate-x-1/2 origin-center -rotate-180'>
              <svg width={400} height={400} className='lg:scale-125' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6366f1" d="M43.3,24.1C29.8,48.4,-25.6,47.5,-39.8,22.8C-54,-1.9,-27,-50.4,0.7,-50C28.4,-49.6,56.8,-0.2,43.3,24.1Z" transform="translate(100 100) scale(1.6)" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default heroSection