/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function clients() {

    const clients = ['Gojek.svg', 'Google.svg', 'Tokopedia.svg'];
    return (
        <div className='container lg:px-28'>
            <div className='w-full px-4'>
                <div className='mx-auto text-center mb-16'>
                    <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Clients</h4>
                    <h2 className='font-bold text-white text-3xl mb-4 capitalize'>Yang pernah bekerjasama</h2>
                    <p className='font-medium text-sm md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas laboriosam aliquid corporis!</p>
                </div>
            </div>
            <div className='w-full px-4'>
                <div className='flex flex-wrap items-center justify-center'>
                    {clients.map((c, i) => (

                        <a href="#" key={i} className='max-w-[120px] mx-4 lg:mx-6 xl:mx-8 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300'>
                            <img src={`/clients/${c}`} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default clients