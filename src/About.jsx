import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" class=" md:p-20">
        <div class="border-2 border-offBlack p-10 m-20">
          <div class="lg:flex gap-x-10">
            <div class="w-full lg:w-2/4 h-[300px] md:h-[500px] bg-cover bg-center bg-[url('https://media.licdn.com/dms/image/C4E03AQG4cs7S3MvijQ/profile-displayphoto-shrink_800_800/0/1516551403775?e=2147483647&v=beta&t=rKbkfZyKVfhXZf5fPtKtpUhZ79AJP3asIovj_7Iy3sw')] flex justify-center items-end mb-10">
              <h1 class="font-bebas text-xl md:text-4xl text-offBlack bg-white w-11/12 text-center drop-shadow-2xl rounded-md py-2 -mb-6">
                21 YEARS of EXPERIENCE
              </h1>
            </div>
            <div class="w-full lg:w-2/4 h-full font-bebas">
              {/* <p class="text-xl md:text-3xl mt-2">ABOUT US</p> */}
              <h1 class="text-5xl md:text-7xl mt-5">Who is Sanjay Sharma ?</h1>
              {/* <h1 class="text-5xl md:text-7xl">Just Got better</h1> */}
              <p class="font-montserrat mt-10">
                Sanjay Sharma , son of late veteran filmmaker K C Sharma, is an
                internationally popular award winning Indian director,
                screenplay writer, editor and producer. His recent projects
                include Paranormal : Based on True Facts (Horror Thriller) 2020.
                Military Raj, His next directorial venture, Dunnoy Na Jaane Kyun
                Internationally Awarded. Dunnoy 2 Life Is A Moment is being
                produced by Hungry Hearts, a European production house in
                association with Shantketan Films. Also directed documentary
                film and ad film. Sanjay Sharma is a director and writer, known
                for Jaane Bhi Do Yaaro (2018), and National Treasure: The Blood
                Run (2019). Presently working on Web Series Eagle Eye and
                Internatinal project produced by Internatinal Originals USA ,
                Bollywood N VIne (under pre- production) .{" "}
              </p>
              <button class="border-2 border-black px-5 py-2 text-xl mt-10 hover:bg-yellow hover:text-black hover:border-yellow transition-all font-bebas">
                Discover More
              </button>
            </div>
          </div>
          <div class="grid lg:grid-cols-3 gap-x-20 mt-10">
            <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-20">
              <h1 class="font-bebas text-3xl md:text-5xl mt-5">OUR VISIOn</h1>
              <p class="font-montserrat">
              At Spark Reach Meddia, our vision is to be the premier partner for filmmakers and content creators, guiding them through the dynamic landscape of the entertainment industry. We envision a future where every creative project finds its audience, and every storyteller has the support and resources they need to bring their vision to life.
              </p>
            </div>
            <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-20">
              <h1 class="font-bebas text-3xl md:text-5xl mt-5">OUR Mission</h1>
              <p class="font-montserrat">
              Our mission at Spark Reach Media is to revolutionize the distribution and marketing landscape for films and web series. We are committed to providing seamless pre-approval processes, unparalleled distribution services, and innovative marketing and event solutions tailored to the unique needs of the film industry. We strive to empower creators, connect them with global audiences, and amplify their impact in the ever-evolving world of entertainment.
              </p>
            </div>
            {/* <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-10">
                        <h1 class="font-bebas text-3xl md:text-5xl mt-5">OUR Motto</h1>
                        <p class="font-montserrat">“We don’t make movies to make money, we make money to make more
                            movies.”</p>
                    </div> */}
            <div class="border-t-4 border-offBlack w-full lg:mb-0 mb-10">
              <h1 class="font-bebas text-3xl md:text-5xl mt-5">About US</h1>
              <p class="font-montserrat">
              Spark Reach Media is a dynamic marketing agency specializing in film distribution, pre-approval services, and strategic marketing initiatives for the entertainment industry. With a team of dedicated professionals who are passionate about storytelling, we leverage our expertise to navigate the complexities of the industry on behalf of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
