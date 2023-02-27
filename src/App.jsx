import { useEffect } from 'react';
import HeroSection from './components/home/heroSection'
import AboutSection from './components/home/aboutSection'
import Header from './components/home/header'
import Portfolio from './components/home/portfolio'

function App() {
  useEffect(() => {
    document.title = "Portfolio Tailwind Css"
  }, [])

  

  return (
    <body>
      <Header/>
      <section id='home' className='pt-14'>
        <HeroSection/>
      </section>
      <section id='about' className='pt-36 pb-32'>
        <AboutSection/>
      </section>
      <section id='portfolio' className='pt-36 pb-16 bg-slate-100'>
        <Portfolio/>
      </section>

    </body>
  );
}

export default App;
