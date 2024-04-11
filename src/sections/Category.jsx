import React from 'react'
import CategoryCard from '../components/CategoryCard'

const Category = () => {
  return (
    <section id='category' className='max-container mt-8 xl:pl-10 max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>
        <span className='text-coral-red'> Shop By </span> Category
      </h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Experience top-notch quality and style with our sought-after
        selections. Discover a world of comfort, design, and value
      </p>
    </div>
    <div className="mt-5 grid xl:grid-cols-4 ">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>

    </div>
  </section>
  )
}

export default Category
