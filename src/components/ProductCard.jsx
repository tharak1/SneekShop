import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, deleteFromCart, getCartItems } from '../redux/cartSlice';
import { setUser } from '../redux/userSlice';
import QuantitySelector from './QuantitySelector';

const ProductCard = () => {

    const inCartProducts = useSelector(getCartItems);

    const [inCart, setInCart] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const temp = useSelector(setUser);
    const userId = temp.userData.uid;
  
    useEffect(()=>{
      let found = inCartProducts.find(item => item.id === props.pr.id)
      if(found !== undefined){
        setInCart(true);
        setQuantity(found.quantity);
      }
    },[]);
  
    const openPage = () => {
      navigate('/productPage');
    };
  
    const removeItemFromCart = ()=>{
      dispatch(deleteFromCart({ productId: props.pr.id, userId }));
      setInCart(false);
    }
  
    const addCart = () => {
      setQuantity(1);
      dispatch(addToCart({ productData: props.pr, userId }));
      toast.success('added to cart');
      setInCart(true);
    };









  return (


<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
        <Rating name="read-only" value={4} readOnly />
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

  )
}

export default ProductCard
