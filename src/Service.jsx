import React, { useState } from "react";
import "./Services.css";
import image1 from './assets/weddings.png';

const data1 = [
  { id: 1, title: "Digital Media", description: "Mesmerizing your marketing experience"},
  { id: 2, title: "Movie/Web Series Distribution", description: "Become risk free by getting onboard the studio right before the shoot" },
  { id: 3, title: "Events", description: "transforms events into unforgettable experiences, providing end-to-end event services that seamlessly blend creativity" },

  // Add more data as needed
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

  return (
    <div>
      <section id="services" className="h-full w-full p-4 md:p-10 lg:p-20 bg-black lg:pt-2">
        <div className="font-bebas">
          <p className="text-center text-5xl md:text-4xl lg:text-5xl text-white sm:text-2xl py-8 pt-10">Our Services</p>
          <h1 className="text-6xl md:text-3xl lg:text-7xl uppercase text-center text-white sm:text-2xl py-0">
            What We Offer
          </h1>
          <div className="flex flex-wrap justify-center items-center mt-8">
            {renderFlipCards(data1)}
          </div>
        </div>
      </section>
    </div>
  );

  function renderFlipCards(data) {
    return data.map((item) => (
      <div className={`flip-card ${flippedCards.includes(item.id) ? "flipped" : ""}`} key={item.id} onClick={() => handleCardClick(item.id)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {/* Display the image using the img tag */}
            {item.img && <img src={item.img} alt="Service Image" className="image" />}
            <h2 className="title">{item.title}</h2>
          </div>
          <div className="flip-card-back">
            <h2 className="title">{item.description}</h2>
          </div>
        </div>
      </div>
    ));
  }
}
