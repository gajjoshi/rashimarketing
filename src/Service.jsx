import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import a1 from "./assets/glass.png";
import a2 from "./assets/glass2.png";
import a3 from "./assets/glass3.png";
import a4 from "./assets/glass4.png";
import b1 from "./assets/wp1.png";
import b2 from "./assets/wp2.png";
import b3 from "./assets/wp3.png";

import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";


import d1 from "./assets/d1.png";


import e1 from "./assets/e1.png";
import e2 from "./assets/e2.png";
import e3 from "./assets/e3.png";


import f1 from "./assets/owp1.jpg";
import f2 from "./assets/owp2.jpg";
import f3 from "./assets/owp3.jpg";
import f4 from "./assets/owp4.jpg";




const data1 = [
  {
    id: 1,
    title: "CRACK FIX SOLUTION",
    description: "Image",
    caption: (
      <>
        <p>Pakaging Size : 5-20KG</p>
        <p>Physical State : Powder</p>
      </>
    ),
    image: a1
  },
  {
    id: 2,
    title: "AR GLASS FIBRE",
    description: "Image",
    caption: (
      <>
        <p>Pakaging GSM : 300-450</p>
        <p>Physical State : Powder</p>
        <p>Packaging Size : 20-25 Kg</p>
        <p>Density : 100 kg/m3</p>
      </>
    ),
    image: a2
  },
  {
    id: 3,
    title: "White Chopped Strands Glass Fiber, For Concrete Reinforcement",
    description: "Image",
    caption: (
      <>
        <p>Glass Fiber Type : Chopped Strands</p>
        <p>Usage/Application : Concrete Reinforcement</p>
        <p>Size 12-13 Micron</p>
        <p>Material Glass : Fiber</p>
      </>
    ),
    image: a3
  },
  {
    id: 4,
    title: "FIBERLESS GLASS MESH",
    description: "Image",
    caption: (
      <>
        <p>GSM : 60-80 GSM</p>
        <p>Weight : 30-100 gram per square meter</p>
        <p>Thickness : 0.1 to 1 mm</p>
        <p>Length : 20-60 m</p>
      </>
    ),
    image: a4
  }
];

const data2 = [
  {
    id: 1,
    title: "WPE-55 WATERPROOFING MEMBRANE",
    description: "Image",
    caption: (
      <>
        <p>Pattern : Plain</p>
        <p>Thickness : 1-3 mm</p>
        <p>Length : 50-100 m</p>
        <p>Width : 1-2 m</p>
      </>
    ),
    image: b1
  },
  {
    id: 2,
    title: "SMART CARE MEMBRANE",
    description: "Image",
    caption: (
      <>
        <p>Brand : WPE-55</p>
        <p>Material : pp</p>
        <p>Thickness : 1 mm</p>
        <p>Size : 1.2mtrs x 100mtrs</p>
      </>
    ),
    image: b2
  },
  {
    id: 3,
    title: "PP WATERPROOFING MEMBRANE",
    description: "Image",
    caption: <></>,
    image: b3
  }
];





const data3 = [
  {
    id: 1,
    title: "ULTRA PLANK PREMIUM PREFINISHED SLIDING",
    description: "Image",
    caption: (
      <>
        <p>Material	: Vinyl</p>
        <p>Color :	Brown</p>
        <p>Thickness :	1-20 mm</p>
        <p>Shape	Rectangular</p>
      </>
    ),
    image: c1
  },
  {
    id: 2,
    title: "PREMIUM PREFINISHED SLIDING",
    description: "Image",
    caption: (
      <>
        <p>Material :	Wooden</p>
        <p>Color :	Brown</p>
        <p>Thickness :	6-15 mm</p>
        <p>Shape ;	Rectangular</p>
      </>
    ),
    image: c2
  },
  {
    id: 3,
    title: "PREMIUM PREFINISHED EXTERIOR SLIDING",
    description: "Image",
    caption: <>
    <p>Material :	Vinyl</p>
    <p>Thickness :	4-16 mm</p>
    <p>Shape :	Rectangular</p>
    <p>Packaging Type :	Box</p>
  </>,
    image: c3
  }
];






const data4 = [
  {
    id: 1,
    title: "ASPHALT ROOFING SHINGLES",
    description: "Image",
    caption: (
      <>
        <p>Material :	Asphalt Cement</p>
        <p>Pattern	: Flat tile</p>
        <p>Surface Treatment :	Color Coated</p>
        <p>Technique :	Hot Rolled / Cold Rolled</p>
      </>
    ),
    image: d1
  }
];





const data5 = [
  {
    id: 1,
    title: "FRAMELESS SLIDING DOOR",
    description: "Image",
    caption: (
      <>
        <p>Material	Glass</p>
        <p>Opening Pattern	Horizontal</p>
        <p>Weight	80Kg</p>
        <p>Thickness	10-20 mm</p>
      </>
    ),
    image: e1
  },
  {
    id: 2,
    title: "SELF CLOSING SLIDING DOOR",
    description: "Image",
    caption: (
      <>
        <p>Material	Glass</p>
        <p>Height	7-8 Feet</p>
        <p>Glass Thickness	12-20 mm</p>
        <p>Length	6-7 Feet</p>
      </>
    ),
    image: e2
  },
  {
    id: 3,
    title: "SEMI AUTOMATIC DOORS",
    description: "Image",
    caption: <>
    <p>Material	Aluminium</p>
    <p>Surface Treatment	Color Coated</p>
    <p>Technique	Hot Rolled</p>
    <p>Door Type	Hinged</p>
  </>,
    image: e3
  }
];









const data6 = [
  {
    id: 1,
    title: "WPE FRX-09",
    description: "Image",
    caption: (
      <>
      <h1 style={{color:"orange"}}>FIRE RETARDANT FOR FABRIC TEXTILES / WOOD/ PAPER/ Ply </h1>
      <p>Color :	Colorless</p>
        <p>pH	: 7.0 to 8.0</p>
        <p>Property :	Water Soluble</p>
        <p>State :	Liquid</p>
      </>
    ),
    image: f1
  },
  {
    id: 2,
    title: "WPE55 PIPE COLLAR",
    description: "Image",
    caption: (
      <>
        
      </>
    ),
    image: f2
  },
  {
    id: 3,
    title: "WPE55 PLUG",
    description: "Image",
    caption: <>
    
  </>,
    image: f3
  },
  {
    id: 4,
    title: "WPE56-PUDDLE FLANGE",
    description: "Image",
    caption: <>
    
  </>,
    image: f4
  }
];





























export default function Service() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);

  const handleCardClick = (id) => {
    setFlippedCards((prevFlippedCards) => {
      if (prevFlippedCards.includes(id)) {
        return prevFlippedCards.filter((cardId) => cardId !== id);
      } else {
        return [...prevFlippedCards, id];
      }
    });
  };

  const handleToggleProducts = () => {
    setShowMore(!showMore);
    setShowLess(false);
  };

  const handleToggleLess = () => {
    setShowLess(!showLess);
    setShowMore(false); // Set showMore to false when showing less
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div>
      <section
        id="services"
        className="h-full w-full p-4 md:p-10 lg:p-20 bg-black lg:pt-2"
      >
        <div className="font-bebas">
          <p className="text-center text-5xl md:text-4xl lg:text-5xl text-white sm:text-2xl py-8 pt-10">
            Our PRODUCTS
          </p>
          <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
            GLASS FIBRE
          </h1>
          <div className="card-slider-container">
            <Slider {...settings} className="card-slider">
              {data1.map((item) => (
                <div key={item.id} className="flip-card-container">
                  <div
                    className={`flip-card ${
                      flippedCards.includes(item.id) ? "flipped" : ""
                    }`}
                    onClick={() => handleCardClick(item.id)}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h2 className="title">{item.title}</h2>
                      </div>
                      <div className="flip-card-back">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                  <p className="caption">{item.caption}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div style={{marginTop:"50px"}}>
          </div>
          <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
                Waterproofing Membrane
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data2.map((item) => (
                    <div key={item.id} className="flip-card-container">
                      <div
                        className={`flip-card ${
                          flippedCards.includes(item.id) ? "flipped" : ""
                        }`}
                        onClick={() => handleCardClick(item.id)}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <h2 className="title">{item.title}</h2>
                          </div>
                          <div className="flip-card-back">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                    </div>
                  ))}
                </Slider>
              </div>
              <div style={{marginTop:"50px"}}>
          </div>

              






          {showMore && (
            <>
              <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
                PREFINISHED SIDING
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data3.map((item) => (
                    <div key={item.id} className="flip-card-container">
                      <div
                        className={`flip-card ${
                          flippedCards.includes(item.id) ? "flipped" : ""
                        }`}
                        onClick={() => handleCardClick(item.id)}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <h2 className="title">{item.title}</h2>
                          </div>
                          <div className="flip-card-back">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                      <div style={{marginTop:"50px"}}>
          </div>
                      
                    </div>
                    


                    

                    















                  ))}
                </Slider>
                
              </div>



              <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
                SELF CLOSING DOORS
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data5.map((item) => (
                    <div key={item.id} className="flip-card-container">
                      <div
                        className={`flip-card ${
                          flippedCards.includes(item.id) ? "flipped" : ""
                        }`}
                        onClick={() => handleCardClick(item.id)}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <h2 className="title">{item.title}</h2>
                          </div>
                          <div className="flip-card-back">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                      
                    </div>

                    















                  ))}
                </Slider>
                <div style={{marginTop:"50px"}}>
                </div>
              </div>








              <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
                OTHER WATERPROOFING MATERIALS
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data6.map((item) => (
                    <div key={item.id} className="flip-card-container">
                      <div
                        className={`flip-card ${
                          flippedCards.includes(item.id) ? "flipped" : ""
                        }`}
                        onClick={() => handleCardClick(item.id)}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <h2 className="title">{item.title}</h2>
                          </div>
                          <div className="flip-card-back">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                      
                    </div>

                    















                  ))}
                </Slider>
                <div style={{marginTop:"50px"}}>
                </div>
              </div>









































              <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
                ASPHALT ROOFING
              </h1>
              <div className="card-slider-container" style={{alignContent:"center"}}>
                  {data4.map((item) => (
                    <div key={item.id} className="flip-card-container">
                      <div
                        className={`flip-card ${
                          flippedCards.includes(item.id) ? "flipped" : ""
                        }`}
                        onClick={() => handleCardClick(item.id)}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <h2 className="title">{item.title}</h2>
                          </div>
                          <div className="flip-card-back">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                      
                    </div>

                    















                  ))}
              </div>
              
            </>
          )}
          {!showMore && !showLess && (
            <button
              onClick={handleToggleProducts}
              className="text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-600"
            >
              Load More
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
