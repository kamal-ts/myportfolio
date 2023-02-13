/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function App() {
  useEffect(() => {
    document.title = "Portfolio Tailwind Css"
  }, [])

  const profile = 'https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/328513213_1344061813110273_7357538499983655938_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rWi69FqWbmYAX-cDClr&_nc_ht=scontent-sin6-3.xx&oh=00_AfCjoCt8ClxYdFezjv0d0K1kAllOrscKcwMHHJL30b4rmg&oe=63EFE967';

  return (
    <body>
      {/* hero section start */}
      <section id='home' className='pt-36'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2'>
              <h1 className='text-base font-semibold text-indigo'>Hallo Semua 👋, saya <span className='block font-bold text-dark text-4xl mt-1'>La Ode Kamaluddin</span></h1>
              <h2 className='font-medium text-slate-500 text-lg mb-5'>Web Developer</h2>
              <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fuga?</p>
              <a href="#" className='text-base font-semibold text-white bg-indigo py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Hubungi saya</a>
            </div>
            <div className='w-full self-end px-4 lg:w-1/2'>
              <div className='relative mt-10 lg:mt-9 lg:right-0'>
                <div className='rounded-full bg-indigo p-2 max-w-max'>
                  <div className='p-2 bg-white rounded-full '>
                    <img src={profile} alt="kamaluddin" className='border border-indigo max-w-xs mx-auto rounded-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}
    </body>
  );
}

export default App;
