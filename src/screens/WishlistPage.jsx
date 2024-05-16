import React from 'react'
import Navbar from '../components/Navbar';
import PopularProductCard from '../components/PopularProductCard';
import { useSelector } from 'react-redux';
import { getProducts } from '../redux/productsSlice';


const WishlistPage = () => {
  const temp = useSelector(getProducts);
  const products = temp.items;
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
    { products.map((product,index)=><PopularProductCard pr={product} key={index}/>)}
    </div>
  </section>
    </>
  )
}

export default WishlistPage
