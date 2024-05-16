import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useLocation } from 'react-router-dom';
import { getCartItems } from '../redux/cartSlice';
import Modal from '../components/Modal';
import RazorPay from '../components/RazorPay';

const OrderConfirmationPage = () => {
  const temp = useSelector(setUser);
  const cartItems = useSelector(getCartItems);

  const user = temp.userData;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedProduct = searchParams.get('product');

  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [address,setAddress] = useState({
    Name:"",
    address_line:"",
    city:"",
    phno:"",
    pincode:"",
    state:""
  });


  useEffect(() => {
    let tempSubTotal = 0;
    if (encodedProduct === "cart") {
      console.log(cartItems);
      setCheckoutProducts(cartItems);
      cartItems.forEach((cartItem) => {
        tempSubTotal = tempSubTotal + (parseInt(cartItem.price) * cartItem.quantity)
      })
      setSubTotal(tempSubTotal);
    } else {
      const product = JSON.parse(decodeURIComponent(encodedProduct));
      const correctedUrl = product.ProductImage.replace( "images/","images%2F");
      product.ProductImage = correctedUrl;
      setCheckoutProducts([product]);
      setSubTotal(product.price)
      
      console.log(product.ProductImage);
    }
  }, [encodedProduct, cartItems]);

  useEffect(() => {
    const total = parseFloat(subTotal) + parseFloat(shipping);
    setTotalAmount(total);
  }, [subTotal, shipping]);

  return (
    <>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {checkoutProducts.map((obj, index) => (
              <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={obj.ProductImage} alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{obj.title}</span>
                  <span className="float-right text-gray-400">8(UK)</span>
                  <span className="float-right text-gray-400">{obj.quantity}</span>

                  <p className="text-lg font-bold">{obj.price} Rs/-</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input className="peer hidden" id="radio_1" type="radio" name="radio" checked={shipping === 0} />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1" onClick={() => setShipping(0)}>
                <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Free Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 5-6 Days</p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input className="peer hidden" id="radio_2" type="radio" name="radio" checked={shipping === 120} />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2" onClick={() => setShipping(120)}>
                <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fast Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">+ 120 Rs/-</p>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                </div>
              </label>
            </div>
          </form>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Address Details</p>
          <p className="text-gray-400">Complete your order by providing your payment details.</p>
          <form className="mt-5 grid gap-6">
            
              {user.Address.map((obj, index) => (
                <div key={index}>
                  <div className="relative">
                  <input   className="peer hidden" id={`radio_address_${index + 1}`} type="radio" name="Address_radio" checked={selectedAddressIndex === index} onChange={() => setSelectedAddressIndex(index)} />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor={`radio_address_${index + 1}`}>
                    <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                    <div className="ml-5">
                      <p className="mt-2 font-semibold">{obj.Name}</p>
                      <p className="mt-2 font-semibold">{obj.phno}</p>
                      <p className="mt-2 font-semibold">{obj.address_line}</p>
                      <p className="mt-2 font-semibold">{obj.city},{obj.state}</p>
                      <p className="mt-2 font-semibold">{obj.pincode}</p>
                    </div>
                  </label>
                  </div>
                </div>
              ))}
              {/* <div className="mt-5"><span className="hover:decoration-red-950 cursor-pointer">+ Add</span></div> */}
              <Modal address={address} setAddress={setAddress} />
            
          </form>
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">Rs {subTotal}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">Rs {shipping}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">Rs {totalAmount}</p>
          </div>
          <RazorPay id={"rthrntjnrbjn"} items={checkoutProducts} amount = {totalAmount} address={user.Address[selectedAddressIndex]} />
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationPage;
