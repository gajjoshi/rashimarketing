import React from "react";
import "./Movies.css";
import axios from "axios";
import { useState, useEffect } from 'react';
//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel from 'better-react-carousel'


export default function Movies() {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [data, setData] = useState();
  useEffect(() => {

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://skfprodhouse.pythonanywhere.com/portfolio/',
  headers: { }
};

async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log((response.data));
    setData(response.data);
  }
  catch (error) {
    console.log(error);
  }
}

makeRequest();

    
  }, []);
  return (
    <div>
      <section id="movies" class="bg-gray-200 h-full w-full p-5 md:p-20">
        <div class="font-bebas text-black text-4xl pb-12 ">
          <p style={{textAlign:"center"}}>OUR MOVIE</p>
          <div class="md:flex justify-between items-center "style={{textAlign:"center"}}>
            <h1 class="text-4xl md:text-7xl" > collection</h1>
            
          </div>
        </div>
        {data?<>
          <Carousel cols={4} rows={1} gap={20} loop autoplay={1000}>
        {data.map((item,k) => {
          return(
            <Carousel.Item>
              <div className="imgcar" >
        <img src={item.image} />
        </div>
      </Carousel.Item>
          )
        })}
         </Carousel>
        
              </>:<></>}
        
      </section>
    </div>
    
  );
}
