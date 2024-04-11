import React from 'react'
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import  Button  from "../components/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {

  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

const Offers = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 mt-10 max-container'>
      <div className='flex-1 w-3/6 pl-10'>

      <Carousel 
      arrows={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      itemClass="carousel-item-margin-left-80-px"
      // itemClass="carousel-item-paddin"
      >
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          // className='object-contain w-full'
        />
                <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          // className='object-contain w-full'
        />
                <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          // className='object-contain w-full'
        />
                <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          // className='object-contain w-full'
        />
                <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          // className='object-contain w-full'
        />
                <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          // className='object-contain w-full'
        />

      </Carousel>

      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default Offers
