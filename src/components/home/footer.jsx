/* eslint-disable react/jsx-no-target-blank */

import React from 'react'
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function footer() {
    return (
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className='w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3'>
                    <h2 className='font-bold text-4xl text-white mb-5'>Kamaluddin</h2>
                    <h3 className='font-bold text-2xl mb-2 '>Hubungi Kami</h3>
                    <p>kamaluddin1623@gmail.com</p>
                    <p>Jl. Pattimura</p>
                    <p>Ambon</p>
                </div>
                <div className='w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3'>
                    <h3 className='font-semibold text-xl text-white mb-5' >Kategori Tulisan</h3>
                    <ul>
                        <li>
                            <a href="#" className='inline-block text-base hover:text-indigo mb-3'>Programing</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block text-base hover:text-indigo mb-3'>Teknologi</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block text-base hover:text-indigo mb-3'>Gaya Hidup</a>
                        </li>
                    </ul>
                </div>
                <div className='w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3'>
                    <h3 className='font-semibold text-xl text-white mb-5' >Tautan</h3>
                    <ul>
                        <li>
                            <a href="#home" className='inline-block text-base hover:text-indigo mb-3'>Beranda</a>
                        </li>
                        <li>
                            <a href="#about" className='inline-block text-base hover:text-indigo mb-3'>Tentang Saya</a>
                        </li>
                        <li>
                            <a href="#portfolio" className='inline-block text-base hover:text-indigo mb-3'>Portfolio</a>
                        </li>
                        <li>
                            <a href="#clients" className='inline-block text-base hover:text-indigo mb-3'>Clients</a>
                        </li>
                        <li>
                            <a href="#blog" className='inline-block text-base hover:text-indigo mb-3'>Blog</a>
                        </li>
                        <li>
                            <a href="#contact" className='inline-block text-base hover:text-indigo mb-3'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-full pt-10 border-t border-slate-700'>
                <div className=' flex items-center mt-4 gap-2 justify-center mb-5'>
                    <a href="#" className='transition-all duration-300 rounded-full flex justify-center items-center text-slate-300 border-2 border-slate-300 p-2 hover:border-indigo hover:text-white hover:bg-indigo '>
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className='transition-all duration-300 rounded-full flex justify-center items-center text-slate-300 border-2 border-slate-300 p-2 hover:border-indigo hover:text-white hover:bg-indigo '>
                        <FaTwitter />
                    </a>
                    <a href="#" className='transition-all duration-300 rounded-full flex justify-center items-center text-slate-300 border-2 border-slate-300 p-2 hover:border-indigo hover:text-white hover:bg-indigo '>
                        <FaInstagram />
                    </a>
                </div>
                <p className='font-semibold text-xs text-slate-500 text-center'>Dibuat oleh <a href="https://github.com/kamal-ts" target={'_blank'} className='font-bold text-indigo'>La Ode Kamaluddin</a>, menggunakan <a href="https://tailwindcss.com" target={'_blank'} className='font-bold text-sky-500'>Tailwind CSS</a> dan <a href="https://react.dev/" target={'_blank'} className='font-bold text-[#61dafb]'>ReactJs</a> .</p>
            </div>
        </div>
    )
}

export default footer