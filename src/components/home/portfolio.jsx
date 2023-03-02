import React from 'react'

function portfolio() {

  const gambar = ['portfolio1.png', 'portfolio2.png', 'portfolio3.png', 'portfolio4.png'];
  return (
    <div className='container lg:px-28'>
      <div className='w-full px-4'>
        <div className='max-w-xl mx-auto text-center'>
          <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Portfolio</h4>
          <h2 className='font-bold text-dark text-3xl mb-4'>Project Terbaru</h2>
          <p className='font-medium text-sm md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil asperiores dolore magnam! Autem soluta tenetur ipsa sint eum reprehenderit placeat.</p>
        </div>
      </div>
      <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto '>
        {gambar.map((g, i) => (

          <div className='p-4 md:w-1/2 ' key={i}>
            <div className='overflow-hidden border-2 rounded-2xl hover:border-sky-400 transition duration-300 hover:cursor-pointer'>
              <img src={`/img/${g}`} alt="portfolio" className={"w-full h-56 lg:h-60 object-cover"} />
              <div className='px-4 pb-4'>
                <h3 className='font-semibold text-lg text-dark mt-5 mb-3'>Restfull API aplikasi boking hotel</h3>
                <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium quasi, molestias aspernatur adipisci nisi.</p>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default portfolio