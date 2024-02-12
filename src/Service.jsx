import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

const data1 = [
  { 
    id: 1, 
    title: "WPE55", 
    description: "EWF", 
    caption: (
      <>
        <p>Caption 1 sfd sdf sf</p>
        <p>f erf erf e</p>
        <p>rf erf erf</p>
      </>
    ) 
  },
  { id: 2, title: "P2", description: "SDF", caption: "Caption 2" },
  { id: 3, title: "P3", description: "DS", caption: "Caption 3" },
  { id: 4, title: "P4", description: "DS", caption: "Caption 4" },
  { id: 5, title: "P5", description: "DS", caption: "Caption 5" },
  { id: 6, title: "P6", description: "DS", caption: "Caption 6" },
];

export default function Service() {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (id) => {
    // Toggle the state of the clicked card
    setFlippedCards((prevFlippedCards) => {
      if (prevFlippedCards.includes(id)) {
        return prevFlippedCards.filter((cardId) => cardId !== id);
      } else {
        return [...prevFlippedCards, id];
      }
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Adjust speed as needed
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
            What We Offer
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
                        <h2 className="title">{item.description}</h2>
                      </div>
                    </div>
                  </div>
                  <p className="caption">{item.caption}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
