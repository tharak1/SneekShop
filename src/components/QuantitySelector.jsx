import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, getCartItems, updateCartItemQuantity } from '../redux/cartSlice';

const QuantitySelector = ({ pId, quantity, setQuantity, setInCart, userId }) => {
    const dispatch = useDispatch();
  
    const decrementQuantity = () => {
      const updatedQuantity = quantity - 1; // Get the updated quantity
      if (updatedQuantity > 0) {
        setQuantity(updatedQuantity);
        dispatch(updateCartItemQuantity({ productId: pId, userId, quantity: updatedQuantity }));
      } else {
        // Handle the case when quantity becomes 0
        dispatch(deleteFromCart({ productId: pId, userId }));
        setInCart(false);
      }
    };
  
    const incrementQuantity = () => {
      const updatedQuantity = quantity + 1; // Get the updated quantity
      setQuantity(updatedQuantity);
      dispatch(updateCartItemQuantity({ productId: pId, userId, quantity: updatedQuantity }));
    };
  
    return (
      <div>
        <form className="">
          <div className="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              onClick={decrementQuantity}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="999"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
            <button
              type="button"
              onClick={incrementQuantity}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default QuantitySelector;
  