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
                        <a href="#" className='font-bold text-lg text-indigo block py-6'>Kamaluddin</a>
                    </div>
                    <div className='flex items-center px-4'>
                        <button id='hamburger' onClick={handleMenu} name='hamburger' type='button'
                            className={`block absolute right-4 `}>
                            <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${hamburger ? 'rotate-45' : ''}`}></span>
                            <span className={`hamburger-line transition duration-300 ease-in-out ${hamburger ? 'scale-0' : ''}`}></span>
                            <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${hamburger ? '-rotate-45' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header