// import React from 'react'
// import Navbar from '../components/Navbar';


// const CartPage = () => {
//   return (
//     <>
//         <section>
//             <Navbar/>
//         </section>
//         <div class="h-screen bg-gray-100 pt-20">
//         <div className='flex flex-col justify-start gap-5'>
//       <h2 className='text-4xl font-palanquin font-bold'>
//         Your <span className='text-coral-red'> Cart </span> Products
//       </h2>
//     </div>
//     <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//       <div class="rounded-lg md:w-2/3">
//         <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product" class="w-full rounded-lg sm:w-40" />
//           <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div class="mt-5 sm:mt-0">
//               <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
//               <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
//             </div>
//             <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div class="flex items-center border-gray-100">
//                 <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                 <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
//                 <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//               </div>
//               <div class="flex items-center space-x-4">
//                 <p class="text-sm">259.000 ₭</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product" class="w-full rounded-lg sm:w-40" />
//           <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div class="mt-5 sm:mt-0">
//               <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
//               <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
//             </div>
//             <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div class="flex items-center border-gray-100">
//                 <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                 <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
//                 <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//               </div>
//               <div class="flex items-center space-x-4">
//                 <p class="text-sm">259.000 ₭</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//         <div class="mb-2 flex justify-between">
//           <p class="text-gray-700">Subtotal</p>
//           <p class="text-gray-700">$129.99</p>
//         </div>
//         <div class="flex justify-between">
//           <p class="text-gray-700">Shipping</p>
//           <p class="text-gray-700">$4.99</p>
//         </div>
//         <hr class="my-4" />
//         <div class="flex justify-between">
//           <p class="text-lg font-bold">Total</p>
//           <div class="">
//             <p class="mb-1 text-lg font-bold">$134.98 USD</p>
//             <p class="text-sm text-gray-700">including VAT</p>
//           </div>
//         </div>
//         <button class="mt-6 w-full rounded-md bg-coral-red py-1.5 font-medium text-blue-50 hover:bg-coral-red">Check out</button>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default CartPage


import React, { useContext, useEffect, useState } from 'react'
import Modal from '../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../config/firebase';
import {useNavigate} from 'react-router-dom';
// import {useSelector} from "react-redux";
import { setUser } from '../redux/userSlice';
import { fetchOrders } from '../redux/ordersSlice';


function Cart() {
  
  const user = useSelector(setUser);
  const navigate = useNavigate();

  // const context = useContext(myContext)
  const { mode } = "light";

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart")
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    console.log(temp)
  }, [cartItems])

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmout;
  // console.log(grandTotal)

  /**========================================================================
   *!                           Payment Intigration
   *========================================================================**/ 

  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }

    var options = {
      key: "rzp_test_JHYaX11s6e4is0",
      key_secret: "w1ImdQ3gNSxBHonSUOYw7lZU",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "E-Bharat",
      description: "for testing purpose",

      handler:async function (response) {
        console.log(response)
        toast.success('Payment Successful')

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: user.userData.email,
          userid: user.userData.uid,
          paymentId
        }

        const orderInfoString = JSON.stringify(orderInfo);

        // Save the string to local storage
        localStorage.setItem('orderInfo', orderInfoString);

        try {

          const orderRef = collection(firestore, 'orders');
          await addDoc(orderRef, orderInfo);
          dispatch(fetchOrders());
          navigate("/summaries");
        } catch (error) {
          console.log(error)
        }
      },

      theme: {
        color: "#3399cc"
      }
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  }
  return (
    <>
      <div className="h-screen bg-gray-100 pt-5 mb-[60%] " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {cartItems.map((item, index) => {
              const { title, price, description, imageUrl } = item;
              return (
                <div className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
                  <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                      <h2 className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{description}</h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                    </div>
                    <div onClick={() => deleteCart(item)} className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>

                    </div>
                  </div>
                </div>
              )
            })}

          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{totalAmout}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{grandTotal}</p>
              </div>
            </div>
            {/* <Modal  /> */}
            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart