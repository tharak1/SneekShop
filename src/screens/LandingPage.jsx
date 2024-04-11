import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Trending from '../sections/Trending.jsx';
import Quality from '../sections/Quality.jsx';
import Offers from '../sections/Offers.jsx';
import Footer from '../sections/Footer.jsx';
import Category from '../sections/Category.jsx';
// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'
// import { useNavigate } from 'react-router-dom'


const LandingPage = () => {


  return (
    <>
        <section>
            <Navbar />
        </section>

        <section>
          <Hero/>
        </section>

        <section>
          <Trending/>
        </section>

        <section>
          <Quality/>
        </section>


        <section>
          <Offers/>
        </section>
        
        <section>
          <Category/>
        </section>

        <section>
          <Footer/>
        </section>


    </>
  )
}

export default LandingPage
