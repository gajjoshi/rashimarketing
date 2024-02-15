import React from 'react'
import logo from './assets/logo.jpeg';


export default function Footer() {
  return (
    <div >
      <footer class="font-bebas flex flex-col justify-center items-center bg-offBlack text-white h-60">
        <h1 class="text-3xl lg:text-5xl mb-2">RASHI MARKETING</h1>
        <h1 class="text-xl uppercase">Jwellers Of Construction</h1>
        <p class="font-montserrat my-5 text-xs text-center"> </p>
        <img src={logo} alt="Logo" className="h-8 mr-2" /> 

        
    </footer>
    </div>
  )
}
