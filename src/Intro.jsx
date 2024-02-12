import React from 'react'
import bgvideo from './assets/video3.mp4'
import './intro.css'
export default function Intro() {
  return (
    <>
    <div className='video-cont'>    
    <div className="overlay"></div>
            <video autoPlay loop muted className="video">
                  <source src={bgvideo} type="video/mp4" />
                </video>
                <div className='content'>

    </div>
    </div>
    
    </>
  )
}
// bg-[url('https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]