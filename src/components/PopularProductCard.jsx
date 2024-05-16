import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, deleteFromCart, getCartItems } from '../redux/cartSlice';
import { setUser } from '../redux/userSlice';
import QuantitySelector from './QuantitySelector';

const PopularProductCard = (props) => {

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
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" to={`/productPage/${props.pr.id}`}>
        <img className="object-cover bg-center" src={props.pr.CoverimageUrl} alt="product" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to={`/productPage/${props.pr.id}`}>
          <h5 className="text-xl tracking-tight text-slate-900">{props.pr.title}</h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{props.pr.price} rs</span>
            <span className="text-sm text-slate-900 line-through">699 rs</span>
          </p>
          <div className="flex items-center">
            <Rating name="read-only" value={4} readOnly />
          </div>
        </div>
        {inCart ? (
          <div className="flex justify-between items-center">
            <button onClick={removeItemFromCart} className="w-1/2   rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Remove
            </button>
            <QuantitySelector pId = {props.pr.id} quantity={quantity} setQuantity={setQuantity} setInCart = {setInCart} userId = {userId}/>
          </div>
        ) : (
          <button onClick={addCart} className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default PopularProductCard;