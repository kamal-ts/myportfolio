/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function blog() {
    return (
        <div className='container lg:px-28'>
            <div className='w-full px-4'>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Blog</h4>
                    <h2 className='font-bold text-dark text-3xl mb-4'>Tulisan Terkini</h2>
                    <p className='font-medium text-sm md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, laboriosam? Inventore consequuntur sint vero, rerum dolores voluptatum?</p>
                </div>
            </div>
            <div className='flex flex-wrap '>
                <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                        <img src="https://source.unsplash.com/360x200?programming" alt="programing" className='w-full' />
                        <div className='py-8 px-6'>
                            <h3>
                                <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-indigo truncate'>Tips belajar Programing</a>
                            </h3>
                            <p className='font-medium text-base text-secondary mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, vitae?</p>
                            <a href="#" className='font-medium text-sm text-white bg-indigo py-2 px-4 rounded-lg hover:opacity-80 '>Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                        <img src="https://source.unsplash.com/360x200?mechanical" alt="programing" className='w-full' />
                        <div className='py-8 px-6'>
                            <h3>
                                <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-indigo truncate'>Tips belajar Programing</a>
                            </h3>
                            <p className='font-medium text-base text-secondary mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, non facere corporis iusto assumenda reiciendis pariatur?</p>
                            <a href="#" className='font-medium text-sm text-white bg-indigo py-2 px-4 rounded-lg hover:opacity-80 '>Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                        <img src="https://source.unsplash.com/360x200?computer" alt="programing" className='w-full' />
                        <div className='py-8 px-6'>
                            <h3>
                                <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-indigo truncate'>Tips belajar Programing</a>
                            </h3>
                            <p className='font-medium text-base text-secondary mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, vitae?</p>
                            <a href="#" className='font-medium text-sm text-white bg-indigo py-2 px-4 rounded-lg hover:opacity-80 '>Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blog