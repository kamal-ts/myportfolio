import React from 'react'

function aboutSection() {
  return (
    <div className='container lg:px-24'>
        <h4 className='font-bold uppercase text-indigo mb-3 px-4'>Tentang Saya</h4>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full px-4 mb-10'>
            <h2 className='font-bold text-dark text-2xl mb-2'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-base font-medium text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta sint, fugiat corporis consectetur esse, culpa beatae eveniet reiciendis sed illo. Magnam placeat nemo animi? Recusandae a reiciendis temporibus facere!</p>
          </div>
          <div className='w-full px-4'>
            <h3 className='font-semibold text-dark text-2xl mb-2'>Hubungi saya</h3>
            <p className='text-base font-medium text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque numquam vel fuga tenetur illo odit ratione assumenda, impedit, similique, dolores omnis voluptates eveniet optio perferendis expedita. Dignissimos cumque totam possimus?</p>
          </div>
        </div>
    </div>
  )
}

export default aboutSection