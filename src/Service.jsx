import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import a1 from "./assets/glass.png"
import a2 from "./assets/glass2.png"
import a3 from "./assets/glass3.png"
import a4 from "./assets/glass4.png"




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
    image:a1
  },





  { 
    id: 2, 
    title: "AR GLASS FIBRE", 
    description: "Image", 
    caption: (
      <>
        <p>Pakaging GSM : 300-450</p>
        <p>Physical State : Powder</p>
        <p>Packaging Size :	20-25 Kg</p>
        <p>Density : 100 kg/m3</p>

      </>
    ),
    image:a2
  },



  { 
    id: 3, 
    title: "White Chopped Strands Glass Fiber, For Concrete Reinforcement", 
    description: "Image", 
    caption: (
      <>
        <p>Glass Fiber Type	: Chopped Strands</p>
        <p>Usage/Application	: Concrete Reinforcement</p>
        <p>Size	
12-13 Micron</p>
        <p>Material	Glass : Fiber</p>

      </>
    ),
    image:a3
  },


  { 
    id: 4, 
    title: "FIBERLESS GLASS MESH", 
    description: "Image", 
    caption: (
      <>
        <p>GSM :	60-80 GSM</p>
        <p>Weight	: 30-100 gram per square meter</p>
        <p>Thickness	: 0.1 to 1 mm</p>
        <p>Length :	20-60 m</p>

      </>
    ),
    image:a4
  },











  { id: 3, title: "P3", description: "DS", caption: "Caption 3" ,image:{a1}},
  { id: 4, title: "P4", description: "DS", caption: "Caption 4" ,image:{a1}},
  { id: 5, title: "P5", description: "DS", caption: "Caption 5",image:{a1} },
  { id: 6, title: "P6", description: "DS", caption: "Caption 6",image:{a1} },
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
          slidesToShow: 1,
        },
      },
    ],
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
                        <h2 className="title" >{item.title}</h2>

                      </div>
                      <div className="flip-card-back">
                        {/* <h2 className="title">{item.description}</h2> */}
                        <img src={item.image} alt={item.title} />

                      </div>
                    </div>
                  </div>
                  <p className="caption">{item.caption}</p>
                </div>
              ))}
            </Slider>
          </div>
          <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
          Waterproofing Membrane
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data1.slice(3).map((item) => (
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
                            <h2 className="title">{item.description}</h2>
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                    </div>
                  ))}
                </Slider>
              </div>
          {showMore && (
            <>
              <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
              Prefinished Siding
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data1.slice(3).map((item) => (
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
                            <h2 className="title">{item.description}</h2>
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                    </div>
                  ))}
                </Slider>
              </div>
              <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
              Asphalt Roofing Shingles
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data1.slice(3).map((item) => (
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
                            <h2 className="title">{item.description}</h2>
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                    </div>
                  ))}
                </Slider>
              </div>


              <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
              Self Closing Doors
              </h1>
              <div className="card-slider-container">
                <Slider {...settings} className="card-slider">
                  {data1.slice(3).map((item) => (
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
                            <h2 className="title">{item.description}</h2>
                          </div>
                        </div>
                      </div>
                      <p className="caption">{item.caption}</p>
                    </div>
                  ))}
                </Slider>
              </div>



              







              <button onClick={handleToggleLess} className="text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">
                Show Less
              </button>
            </>
          )}
          {!showMore && !showLess && (
            <button onClick={handleToggleProducts} className="text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">
              Load More
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
