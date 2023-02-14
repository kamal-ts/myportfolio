import { useEffect } from 'react';
import HeroSection from './components/home/heroSection'

function App() {
  useEffect(() => {
    document.title = "Portfolio Tailwind Css"
  }, [])

  

  return (
    <body>
      {/* hero section start */}
        <HeroSection/>
      {/* hero section end */}
    </body>
  );
}

export default App;
