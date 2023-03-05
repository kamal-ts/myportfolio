import React from 'react'

function contact() {
    return (
        <div className='container lg:px-28'>
            <div className='w-full px-4'>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Contact</h4>
                    <h2 className='font-bold text-dark text-3xl mb-4'>Hubungi Kami</h2>
                    <p className='font-medium text-sm md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil asperiores dolore magnam! Autem soluta tenetur ipsa sint eum reprehenderit placeat.</p>
                </div>
            </div>
            <form action="">
                <div className='w-full lg:w-2/3 lg:mx-auto'>
                    <div className='w-full px-4 mb-8'>
                        <label htmlFor="name" className='text-base font-bold text-indigo'>Name</label>
                        <input type="text" id='name' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo' />
                    </div>
                    <div className='w-full px-4 mb-8'>
                        <label htmlFor="email" className='text-base font-bold text-indigo'>Email</label>
                        <input type="email" id='email' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo' />
                    </div>
                    <div className='w-full px-4 mb-8'>
                        <label htmlFor="message" className='text-base font-bold text-indigo'>Message</label>
                        <textarea id='message' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo h-32'></textarea>
                    </div>
                    <div className='w-full px-4'>
                        <button className='text-base font-semibold text-white bg-indigo py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>Kirim</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default contact