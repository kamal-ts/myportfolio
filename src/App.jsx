import { useEffect } from 'react';
import HeroSection from './components/home/heroSection'
import AboutSection from './components/home/aboutSection'

function App() {
  useEffect(() => {
    document.title = "Portfolio Tailwind Css"
  }, [])

  

  return (
    <body>
      <section id='home' className='pt-36'>
        <HeroSection/>
      </section>
      <section id='about' className='pt-36 pb-32'>
        <AboutSection/>
      </section>
    </body>
  );
}

export default App;
