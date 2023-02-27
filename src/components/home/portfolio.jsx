import React from 'react'

function portfolio() {
  return (
    <div className='container lg:px-28'>
      <div className='w-full px-4'>
        <div className='max-w-xl mx-auto text-center'>
          <h4 className='font-semibold text-lg text-indigo mb-2'>Portfolio</h4>
          <h2 className='font-bold text-dark text-3xl mb-4'>Project Terbaru</h2>
          <p className='font-medium text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil asperiores dolore magnam! Autem soluta tenetur ipsa sint eum reprehenderit placeat.</p>
        </div>
      </div>
      <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
        <div className='mb-12 p-4 md:w-1/2'>
          <div className='rounded-md shadow-md overflow-hidden '>
            <img src="/img/portfolio2.png" alt="portfolio" className={"w-full h-56 lg:h-60 object-cover"}/>
          </div>
          <h3 className='font-semibold text-lg text-dark mt-5 mb-3'>Restfull API aplikasi boking hotel</h3>
          <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium quasi, molestias aspernatur adipisci nisi.</p>
        </div>
        <div className='mb-12 p-4 md:w-1/2'>
          <div className='rounded-md shadow-md overflow-hidden '>
            <img src="/img/portfolio3.png" alt="portfolio" className={"w-full h-56 lg:h-60 object-cover"}/>
          </div>
          <h3 className='font-semibold text-lg text-dark mt-5 mb-3'>Restfull API aplikasi boking hotel</h3>
          <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium quasi, molestias aspernatur adipisci nisi.</p>
        </div>
        
      </div>
    </div>
  )
}

export default portfolio