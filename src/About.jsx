import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" class=" md:p-20">
        <div class="border-2 border-offBlack p-10 m-20">
          <div class="lg:flex gap-x-10">
            {/* <div class="w-full lg:w-2/4 h-[300px] md:h-[500px] bg-cover bg-center bg-[url('https://media.licdn.com/dms/image/C4E03AQG4cs7S3MvijQ/profile-displayphoto-shrink_800_800/0/1516551403775?e=2147483647&v=beta&t=rKbkfZyKVfhXZf5fPtKtpUhZ79AJP3asIovj_7Iy3sw')] flex justify-center items-end mb-10">
              <h1 class="font-bebas text-xl md:text-4xl text-offBlack bg-white w-11/12 text-center drop-shadow-2xl rounded-md py-2 -mb-6">
                21 YEARS of EXPERIENCE
              </h1>
            </div> */}
            <div class="w-full lg:w-2/4 h-full font-bebas">
              {/* <p class="text-xl md:text-3xl mt-2">ABOUT US</p> */}
              <h1 class="text-5xl md:text-7xl mt-5" style={{alignContent:"center"}}> WHAT DOES RASHI MARKETING DO ?</h1>
              {/* <h1 class="text-5xl md:text-7xl">Just Got better</h1> */}
              <p class="font-montserrat mt-10">
              We, Rashi Marketing are the Manufacturer of Canvas Tent, Glass Fiber, Sound Proof, Trap Door, Sliding Roof, Glass Hinges, Water Treatment, Magnetic Screens, Prefinished Siding, Self Closing Doors, Nano & Glass Coating, Construction Material and Architectural Membrane and Service Provider of Concrete Repairing Services and Construction Material Services. Under the supervision of Mr. Dhaval Somaiya, our firm is achieving heights of achievement. We also provide various amenities to the patrons to put their demands forward and get them solve timely and as per their requirements.
                
              </p>
              <button 
  class="border-2 border-black px-5 py-2 text-xl mt-10 hover:bg-yellow hover:text-black hover:border-yellow transition-all font-bebas"
  onClick={() => window.location.href = 'https://wa.me/'}
>
  Contact
</button>
<button 
  class="border-2 border-black px-5 py-2 text-xl mt-10 hover:bg-yellow hover:text-black hover:border-yellow transition-all font-bebas" 
  onClick={() => window.location.href = 'https://drive.google.com/file/d/1JUgC4-386S0EFTDI8Wf9QiQPg3dHhKWk/view?usp=drivesdk'}
>
  Get Brochure
</button>
            </div>
          </div>
          <div class="grid lg:grid-cols-3 gap-x-20 mt-10">
            {/* <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-20">
              <h1 class="font-bebas text-3xl md:text-5xl mt-5">OUR VISIOn</h1>
              <p class="font-montserrat">
sdf              </p>
            </div> */}
            {/* <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-20">
              <h1 class="font-bebas text-3xl md:text-5xl mt-5">OUR Mission</h1>
              <p class="font-montserrat">
sdf              </p>
            </div> */}
            {/* <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-10">
                        <h1 class="font-bebas text-3xl md:text-5xl mt-5">OUR Motto</h1>
                        <p class="font-montserrat">“We don’t make movies to make money, we make money to make more
                            movies.”</p>
                    </div> */}
            {/* <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-10">
              <h1 class="font-bebas text-3xl md:text-5xl mt-5">About US</h1>
              <p class="font-montserrat">
hello              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
