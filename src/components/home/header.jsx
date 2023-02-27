/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

function Header() {
    const [hamburger, setHamburger] = useState(false);

    const handleMenu = () => {
        setHamburger(!hamburger);
    }

    useEffect(() => {
        window.onscroll = function () {
            const head = document.querySelector('header');
            const fixedNav = head.offsetTop;

            if(window.pageYOffset > fixedNav){
                head.classList.add('navbar-fixed')
            }else{
                head.classList.remove('navbar-fixed');
            }
        }

    }, [])

    return (
        <header className='bg-transparent top-0 left-0 w-full flex items-center z-10'>
            <div className='container lg:px-28'>
                <div className='flex items-center justify-between relative'>
                    <div className='px-4'>
                        <a href="#" className='font-bold text-lg text-indigo block py-4'>Kamaluddin</a>
                    </div>
                    <div className='flex items-center px-4'>
                        <button id='hamburger' onClick={handleMenu} name='hamburger' type='button'
                            className={`block absolute right-4 lg:hidden`}>
                            <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${hamburger ? 'rotate-45' : ''}`}></span>
                            <span className={`hamburger-line transition duration-300 ease-in-out ${hamburger ? 'scale-0' : ''}`}></span>
                            <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${hamburger ? '-rotate-45' : ''}`}></span>
                        </button>
                        <nav id='nav-menu' className={`z-[9999] absolute py-5 shadow-lg rounded-lg transition-all duration-300 bg-white max-w-[250px] w-full right-4 lg:right-auto top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${hamburger ? '' : 'hidden'}`}>
                            <ul className='block lg:flex transition-all duration-300'>
                                <li className='group'>
                                    <a href="#home" className='block transition-all duration-300 text-base text-dark py-2 lg:py-0 pl-8 group-hover:text-indigo'>Beranda</a>
                                </li>
                                <li className='group'>
                                    <a href="#about" className='block text-base transition-all duration-300 text-dark py-2 lg:py-0 pl-8 group-hover:text-indigo'>Tentang Saya</a>
                                </li>
                                <li className='group'>
                                    <a href="#portfolio" className='block text-base transition-all duration-300 text-dark py-2 lg:py-0 pl-8 group-hover:text-indigo'>Portfolio</a>
                                </li>
                                <li className='group'>
                                    <a href="#blog" className='block text-base transition-all duration-300 text-dark py-2 lg:py-0 pl-8 group-hover:text-indigo'>Blog</a>
                                </li>
                                <li className='group'>
                                    <a href="#contact" className='block text-base transition-all duration-300 text-dark py-2 lg:py-0 pl-8 group-hover:text-indigo'>Contact</a>
                                </li>

                                {/* <li className='group'>
                                    <a href="#clients" className='block text-base text-dark py-2 px-8 group-hover:text-indigo'>Clients</a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header