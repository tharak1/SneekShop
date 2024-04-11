import React from 'react'
import { Link } from 'react-router-dom'
import {shoe4} from "../assets/images"


const CategoryCard = () => {
  return (
    <div class="bg-white w-72 h-96 shadow-md rounded-lg  m-3 overflow-clip">
      <div class="h-3/4 w-full ">
        <img class="w-full h-full object-cover rounded-t" src={shoe4} alt="piña"/>
      </div>
      <div class="w-full h-1/4 p-3">
        <Link to="/" class=" hover:text-yellow-600 text-gray-700">
          <span class="text-lg font-semibold uppercase tracking-wide ">Sneeker</span>
        </Link>
        <p class="text-gray-600 text-sm leading-5 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default CategoryCard
