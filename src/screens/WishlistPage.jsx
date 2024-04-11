import React from 'react'
import Navbar from '../components/Navbar';
import PopularProductCard from '../components/PopularProductCard';


const WishlistPage = () => {
  return (
    <>
        <section>
            <Navbar/>
        </section>
        <section id='products' className='max-container  xl:pl-10 mt-24 max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>
        The <span className='text-coral-red'> YOU </span> Products
      </h2>
    </div>
    <div className="grid grid-cols-4">
      <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
                  <PopularProductCard/>
    </div>
  </section>
    </>
  )
}

export default WishlistPage
