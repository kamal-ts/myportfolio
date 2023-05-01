/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

function portfolio() {

  const [detile, setDetile] = useState(true);

  const handleOpen = () => {    
    setDetile(false);
  }

  const handleClose = () => {
    const modal = document.getElementById('modal')
    console.log(modal);
    modal.classList.remove('containerDetailPortfolio')
    modal.classList.add('alert-admin-content');
    setTimeout(() => {
      setDetile(true)
      modal.classList.add('containerDetailPortfolio')
    }, 300);

  }

  const gambar = ['portfolio1.png', 'portfolio2.png', 'portfolio3.png', 'portfolio4.png'];
  return (
    <div className='container lg:px-28'>
      <div className='w-full px-4'>
        <div className='max-w-xl mx-auto text-center mb-16'>
          <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Portfolio</h4>
          <h2 className='font-bold text-dark text-3xl mb-4'>Project Terbaru</h2>
          <p className='font-medium text-sm md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil asperiores dolore magnam! Autem soluta tenetur ipsa sint eum reprehenderit placeat.</p>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-center xl:w-10/12 xl:mx-auto '>
        {gambar.map((g, i) => (

          <div className='p-4 md:w-1/2 ' key={i}>
            <div className='overflow-hidden bg-white shadow-lg border-2 rounded-2xl hover:border-sky-400 transition duration-300 hover:cursor-pointer'>
              <img src={`/img/${g}`} alt="portfolio" className={"w-full h-56 lg:h-60 object-cover"} />
              <div className='px-4 pb-4'>
                <h3 className='font-semibold text-lg text-dark mt-5 mb-3 truncate '>Restfull API aplikasi boking hotel</h3>
                <div className='flex gap-2'>

                  <a href='#sas' onClick={handleOpen} className='bg-indigo py-2 px-4 inline-block rounded-xl text-sm font-medium text-white hover:opacity-80'>Detile</a>
                  <a href='#sas' className='bg-slate-200 py-2 px-4 inline-block rounded-xl text-sm font-medium text-secondary hover:opacity-80'>Visit</a>
                  {/* <p className='font-medium text-base text-secondary' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium quasi, molestias aspernatur adipisci nisi.</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div hidden={detile} className={`z-[1000] fixed inset-0 bg-opacity-25 ${detile? '' : 'bg-black'}`}>
          <div  className={`static w-full flex items-center justify-center`}>
            <div id='modal' className='w-full containerDetailPortfolio md:w-3/4 h-[90%] absolute bottom-0 bg-white border-2 rounded-t-2xl'>
              
                <div className='w-full border-b-2 px-4 py-3 flex flex-row justify-between items-center'>
                  <h1 className='font-bold text-base capitalize'>Restfull API aplikasi boking hotel</h1>
                  <button onClick={handleClose} className=''>❌</button>
                </div>
                <div className='p-4 w-full h-[90%] overflow-y-auto'>
                  <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur magnam vero perferendis nesciunt exercitationem temporibus, mollitia placeat reprehenderit deleniti eveniet fugiat tempore velit beatae neque doloribus architecto minus maxime sit!</p>
                  <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nulla voluptates veritatis esse repellat nobis voluptas magnam non fugiat impedit minus facere beatae vero reiciendis, repellendus doloremque quod laborum neque amet laboriosam aliquam velit aspernatur atque! Ab iusto eius quia!</p>
                  <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nulla voluptates veritatis esse repellat nobis voluptas magnam non fugiat impedit minus facere beatae vero reiciendis, repellendus doloremque quod laborum neque amet laboriosam aliquam velit aspernatur atque! Ab iusto eius quia!</p>
                  <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nulla voluptates veritatis esse repellat nobis voluptas magnam non fugiat impedit minus facere beatae vero reiciendis, repellendus doloremque quod laborum neque amet laboriosam aliquam velit aspernatur atque! Ab iusto eius quia!</p>
                  <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nulla voluptates veritatis esse repellat nobis voluptas magnam non fugiat impedit minus facere beatae vero reiciendis, repellendus doloremque quod laborum neque amet laboriosam aliquam velit aspernatur atque! Ab iusto eius quia!</p>
                </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default portfolio