import React from 'react'
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';

const PrevOrdersPage = () => {
  return (
    <>
    <section>
        <Navbar/>
    </section>

    <div className="w-full mt-24 flex flex-col items-center justify-center">
    <div className='flex flex-col justify-start gap-5 mt-4'>
      <h2 className='text-4xl font-palanquin font-bold'>
        Your <span className='text-coral-red'> PREVIOUS </span> Orders
      </h2>
    </div>
                              <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-2/3">
                            <div className="w-40 md:w-32">
                                <img className="hidden md:block" src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="girl-in-red-dress" />
                                <img className="md:hidden " src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="girl-in-red-dress" />
                            </div>
                            <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                    <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">Premium Quaility Shoes</h3>
                                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                        <p className="text-sm leading-none text-gray-600">
                                            Size: <span className="text-gray-800"> Small</span>
                                        </p>
                                        <p className="text-sm leading-none text-gray-600">
                                            Quantity: <span className="text-gray-800"> 01</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-centerS">
                                    <Button variant="contained">Order Again</Button>
                                    <div className="h-2"></div>

                                    <Button variant="outlined">Track</Button>
                                </div>
                            </div>
                        </div>
                        <div className="h-2"></div>

                        <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-2/3">
                            <div className="w-40 md:w-32">
                                <img className="hidden md:block" src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="girl-in-red-dress" />
                                <img className="md:hidden " src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="girl-in-red-dress" />
                            </div>
                            <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                    <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">Premium Quaility Shoes </h3>
                                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                        <p className="text-sm leading-none text-gray-600">
                                            Size: <span className="text-gray-800"> Small</span>
                                        </p>
                                        <p className="text-sm leading-none text-gray-600">
                                            Quantity: <span className="text-gray-800"> 01</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-centerS">
                                    <Button variant="contained">Order Again</Button>
                                    <div className="h-2"></div>
                                    <Button variant="outlined">Track</Button>
                                </div>
                            </div>
                        </div>
                        <div className="h-2"></div>

                        <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-2/3">
                            <div className="w-40 md:w-32">
                                <img className="hidden md:block" src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="girl-in-red-dress" />
                                <img className="md:hidden " src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="girl-in-red-dress" />
                            </div>
                            <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                    <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">Premium Quaility Shoes</h3>
                                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                        <p className="text-sm leading-none text-gray-600">
                                            Size: <span className="text-gray-800"> Small</span>
                                        </p>
                                        <p className="text-sm leading-none text-gray-600">
                                            Quantity: <span className="text-gray-800"> 01</span>
                                        </p>
                                    </div>
                                </div>
                                {/* mt-4 md:mt-0 md:justify-end items-center w-full */}
                                <div className="flex flex-col justify-center items-centerS">
                                    <Button variant="contained">Order Again</Button>
                                    <div className="h-2"></div>
                                    <Button variant="outlined">Track</Button>
                                </div>
                            </div>
                        </div>
    </div>
    </>
  )
}

export default PrevOrdersPage
