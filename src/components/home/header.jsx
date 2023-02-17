/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

function Header() {
    const [hamburger, setHamburger] = useState(true);

    const handleMenu = () => {
        setHamburger(!hamburger);
    }

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className='container lg:px-28 bg-rose-300 py-3'>
            <div className='flex items-center justify-between relative'>
                <div className='px-4'>
                    <a href="#" className='font-bold text-lg text-indigo'>Kamaluddin</a>
                    <div className='flex items-center'>
                        <button id='hamburger' onClick={handleMenu} name='hamburger' type='button' className='bg-sky-300 block absolute right-4 -top-1'>
                            <span className={`hamburger-line ${hamburger ? 'rotate-45 translate-y-1' : ''}`}></span>
                            <span className={hamburger ? 'h-0 w-0' : `hamburger-line`}></span>
                            <span className={`hamburger-line ${hamburger ? '-rotate-45 -translate-y-1' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header