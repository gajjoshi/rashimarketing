import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Intro from './Intro'
import About from './About'
import Movies from './Movies'
import Footer from './Footer'
import Service from './Service'
import { Link, animateScroll as scroll } from 'react-scroll';
import Contact from './Contact'

function App() {
  const handleScroll = () => {
    
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    if(scrollY<900)
    {
      //intro
    }
    if(scrollY>=900 && scrollY<1800)
    {
      //aboutus
    }
    if(scrollY>=1800 && scrollY<2600)
    {
      //services
    }
    
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     <div>
     
      <Header/>
      <div id='introlink'>
        <Intro/>
      </div>
      <div id='aboutlink'>
        <About/>
      </div>
      {/* <div id='movielink'>
        <Movies/>
      </div> */}
      <div id='servicelink'>
        <Service/>
      </div>
      <div id='contactlink'>
        <Contact/>
      </div>

     
      
      
      
      
      <Footer/>
      {/* <Message /> */}
      

     </div>
    </>
  )
}

export default App
