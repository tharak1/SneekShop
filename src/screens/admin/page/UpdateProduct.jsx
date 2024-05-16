import React from 'react';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom"
import { updateProductSingle } from '../../../redux/productsSlice';
// import {updateProduct} from "../../../redux/productsSlice";

function UpdateProduct(props) {
    
    // Extract product data from props.location.state 
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const encodedProduct = searchParams.get('product');
    const product = JSON.parse(decodeURIComponent(encodedProduct));
    console.log(product);
    const dispatch = useDispatch();

    

    // Initialize state with product data
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const updateProductfunction = ()=>{
        dispatch(updateProductSingle(updatedProduct));
    }

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={updatedProduct.title}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, title: e.target.value })}
                            name='title'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            name='price'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={updatedProduct.imageUrl}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, imageUrl: e.target.value })}
                            name='imageurl'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={updatedProduct.category}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, category: e.target.value })}
                            name='category'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                            value={updatedProduct.description}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product desc'>

                        </textarea>
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            onClick={updateProductfunction}
                            className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct;
