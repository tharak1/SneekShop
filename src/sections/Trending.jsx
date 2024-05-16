import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopularProductCard from "../components/PopularProductCard.jsx"

import {useSelector,useDispatch} from 'react-redux';
import { deleteProduct, getProducts } from '../redux/productsSlice.js';
// import { products } from '../constants/index.js';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Trending = () => {
  const temp = useSelector(getProducts);
  const products = temp.items;

  return (
    <section id='products' className='max-container mt-8 xl:pl-10 max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>
        Our <span className='text-coral-red'> Popular </span> Products
      </h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Experience top-notch quality and style with our sought-after
        selections. Discover a world of comfort, design, and value
      </p>
    </div>
    <div className="mt-5">
        <Carousel
        renderButtonGroupOutside={true}

        swipeable={false}
        draggable={false}
        responsive={responsive}// means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        // dotListClass="custom-dot-list-style"
        renderDotsOutside={true}
        itemClass="carousel-item-padding-80-px"
        >
            {/* <PopularProductCard/>
            <PopularProductCard/> */}
            {/* <PopularProductCard/>
            <PopularProductCard/>
            <PopularProductCard/>
            <PopularProductCard/> */}
           { products.map((product,index)=><PopularProductCard pr={product} key={index}/>)}
        </Carousel>
    </div>
  </section>
  );
}

export default Trending;



