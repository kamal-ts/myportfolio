import { useEffect } from 'react';
import HeroSection from './components/home/heroSection'
import AboutSection from './components/home/aboutSection'
import Header from './components/home/header'
import Portfolio from './components/home/portfolio'
import Clients from './components/home/clients'
import Blog from './components/home/blog'
import Contact from './components/home/contact'
import Footer from './components/home/footer'
import Skills from './components/home/skills'

function App() {
  useEffect(() => {
    document.title = "Portfolio Tailwind Css"
  }, [])

  

  return (
    <div>
      <Header/>
      <section id='home' className='pt-5 md:pt-14'>
        <HeroSection/>
      </section>
      <section id='about' className='pt-36 pb-32'>
        <AboutSection/>
      </section>
      <section id='skills' className='pt-36 pb-32'>
        <Skills/>
      </section>
      <section id='portfolio' className='pt-36 pb-16 bg-slate-100'>
        <Portfolio/>
      </section>
      <section id='clients' className='pt-36 pb-32 bg-dark'>
        <Clients/>
      </section>
      <section id='blog' className='pt-36 pb-32 bg-slate-100'>
        <Blog/>
      </section>
      <section id='contact' className='pt-36 pb-32'>
        <Contact/>
      </section>
      <footer id='footer' className='pt-24 pb-12 bg-dark'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
