import React,{useState} from 'react'
import { shoes, statistics } from "../constants";
import Button from "../components/Button.jsx";
import Shoee from "../components/Shoee.jsx"
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
// import test from "../assets/videos/test.mp4";
import jordan from "../assets/videos/jordan.mp4";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
<section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-between  max-h-screen gap-10 '
    >
      <div className='relative xl:w-3/5 flex flex-col justify-center items-start w-full pl-11 max-xl:pl-12 pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-6 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative mt-4 flex justify-center items-center xl:max-h-screen max-xl:py-40 '>
        {/* <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={}
          height={502}
          className='object-contain relative z-10'
        /> */}
        <div className="h-3/4 w-3/5 rounded-3xl overflow-clip ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={jordan} type="video/mp4" />
        </video>
        </div>


      {/* <iframe className="mt-40 " src="https://assets.pinterest.com/ext/embed.html?id=54184001760987381" 
      title='no' 
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      height="700" width="350"
      allowFullScreen 
      ></iframe> */}

        <div className='flex sm:gap-6 gap-4 absolute bottom-[5%] left-[28%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <Shoee
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
