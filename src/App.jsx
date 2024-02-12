import { useEffect } from 'react'
import Header from './Header'
import Intro from './Intro'
import About from './About'
import Footer from './Footer'
import Service from './Service'

// import People from './People'
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
      <div id='servicelink'>
        <Service/>
      </div>  

      {/* <div id='servicelink' style={{marginTop: 50}}>
        <People/>
      </div> */}



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
