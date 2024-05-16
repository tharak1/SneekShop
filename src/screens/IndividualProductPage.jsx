import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import * as React from 'react';
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import Rating from '@mui/material/Rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReviewPage from '../components/ReviewPage';
import { shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import Shoee from '../components/Shoee';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, getCartItems } from '../redux/cartSlice';
import { doc, getDoc } from 'firebase/firestore';
import { setUser } from '../redux/userSlice';
import {firestore} from '../config/firebase';
import { toast } from 'react-toastify';
import QuantitySelector from '../components/QuantitySelector';



const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.firstButton},& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      Height:30,
      width:40,
      marginRight: 5,
      border: '1px solid black',
    },
}));

const IndividualProductPage = () => {
  let { id } = useParams();



  const [alignment, setAlignment] = React.useState('left');
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [images,setImage] = useState([]);
  const inCartProducts = useSelector(getCartItems);
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temp = useSelector(setUser);
  const userId = temp.userData.uid;
  const [product,setProduct] = useState({});


  const loadProduct = async()=>{
    console.log(id);
    const docRef = doc(firestore, "products",id);
    const docSnap = await getDoc(docRef);

    setProduct({  id: docSnap.id,
      ...docSnap.data(),});

    let Imges = [];

    Imges.push(encodeURIComponent(docSnap.data().CoverimageUrl));

    docSnap.data().otherImages.forEach((obj)=>{
      Imges.push(encodeURIComponent(obj));
    });

    console.log(Imges);

    setImage(Imges);


      setBigShoeImg(docSnap.data().CoverimageUrl);

  }

  

  React.useEffect(()=>{
    loadProduct();





    let found = inCartProducts.find(item => item.id === id)
    if(found !== undefined){
      setInCart(true);
      setQuantity(found.quantity);
    }
  },[]);



  const removeItemFromCart = ()=>{
    dispatch(deleteFromCart({ productId: id, userId }));
    setInCart(false);
  }

  const addCart = () => {
    setQuantity(1);
    dispatch(addToCart({ productData:product, userId }));
    toast.success('added to cart');
    setInCart(true);
  };

  
    // const openPage = ()=>{
    //   navigate("/productPage");
    // }
    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };


    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    const opentracking = ()=>{
        navigate(`/orderconfirm?product=${encodeURIComponent(JSON.stringify({...product,ProductImage:product.CoverimageUrl}))}`);
    }


  return (
<>
<section>
    <Navbar/>
</section>
<section class="py-12 sm:py-16 mt-16"> 
  <div class="container mx-auto px-4">
    <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div class="lg:col-span-3 lg:row-end-1">
        <div class="lg:flex lg:items-start">
          <div class="lg:order-2 lg:ml-5  ">
            <div class="max-w-xl h-60 overflow-hidden rounded-lg">
              <img class="h-full w-full max-w-full object-cover" src={bigShoeImg} alt="" />
            </div>
          </div>

          <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div class="flex flex-row items-start lg:flex-col">
            {images.map((image, index) => (
            <div key={index}>
              <Shoee
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product.title}</h1>

        <div class="mt-5 flex items-center">
        <Rating name="read-only" value={4} readOnly />

          <p class="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
        </div>

        <h2 class="mt-8 text-base text-gray-900">Size (UK)</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton color='primary' value="left" aria-label="left aligned">
            <p>7</p>
          </ToggleButton>
          <ToggleButton color='primary' value="center" aria-label="centered">
            <p>8</p>
          </ToggleButton>
          <ToggleButton color='primary' value="right" aria-label="right aligned">
          <p>9</p>
          </ToggleButton>
          <ToggleButton color='primary' value="justify" aria-label="justified" >
          <p>10</p>

          </ToggleButton>

          </StyledToggleButtonGroup>
        </div>



        {/* <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div class="flex items-end">
            <h1 class="text-3xl font-bold">$60.50</h1>
            <span class="text-base"></span>
          </div>



            <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800" onClick={openModal}>
              <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 17a2 2 0 100-4 2 2 0 000 4zM21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2M15 3h6a2 2 0 012 2v12a2 2 0 01-2 2h-6M9 3h-6a2 2 0 00-2 2v12a2 2 0 002 2h6" />
              </svg>
              Buy Now
            </button>


            {inCart ? (
          <div className="flex justify-between items-center">
            <button onClick={removeItemFromCart} className="w-1/2   rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Remove
            </button>
            <QuantitySelector pId = {id} quantity={quantity} setQuantity={setQuantity} setInCart = {setInCart} userId = {userId}/>
          </div>
        ) : (
          <button onClick={addCart} className="w-1/2 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </button>
        )}
        </div> */}


<div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
  <div class="flex items-end">
    <h1 class="text-3xl font-bold">Rs {product.price}</h1>
    <span class="text-base"></span>
  </div>

  <button type="button" class="flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800" onClick={openModal}>
    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 17a2 2 0 100-4 2 2 0 000 4zM21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2M15 3h6a2 2 0 012 2v12a2 2 0 01-2 2h-6M9 3h-6a2 2 0 00-2 2v12a2 2 0 002 2h6" />
    </svg>
    Buy Now
  </button>

  {inCart ? (
    <div className="flex justify-between items-center">
      <button onClick={removeItemFromCart} className="w-full rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Remove
      </button>
      <QuantitySelector pId={id} quantity={quantity} setQuantity={setQuantity} setInCart={setInCart} userId={userId} />
    </div>
  ) : (
    <button onClick={addCart} className="flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart
    </button>
  )}
</div>


        <ul class="mt-8 space-y-2">
          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
            </svg>
            Free shipping worldwide
          </li>

          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
            </svg>
            Cancel Anytime
          </li>
        </ul>
      </div>
      <Tabs defaultIndex={0} className="lg:col-span-3 " >
      <div class="lg:col-span-3">
        {/* <TabList class="border-b border-gray-300 lg:col-span-3">
          <nav class="flex gap-4">
            <Tab  title="" class="cursor-pointer border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </Tab>

            <Tab  title="" class="cursor-pointer flex row items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
          <div className="flex row pb-3">              Reviews
              <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span></div>
            </Tab>
          </nav>
        </TabList> */}
<TabList className="border-b border-gray-300 lg:col-span-3">
  <nav className="flex gap-4">
    <Tab
      title=""
      className="cursor-pointer border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
      activeClassName="border-gray-900"
      activeStyle={{ borderBottomWidth: '2px' }}
    >
      Description
    </Tab>
    <Tab
      title=""
      className="cursor-pointer border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
      activeClassName="border-gray-900"
      activeStyle={{ borderBottomWidth: '2px' }}
    >
      <div className="flex items-center pb-3">
        Reviews <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">1,209</span>
      </div>
    </Tab>
  </nav>
</TabList>


        <TabPanel>
        <div class="mt-8 flow-root sm:mt-12">
          <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
          <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
          
          <p class="mt-4">{product.description}</p>
          
        </div>
        </TabPanel>

        <TabPanel>
            <ReviewPage></ReviewPage>
        </TabPanel>



      </div>

      </Tabs>

      
    </div>
  </div>
</section>



<Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Booking Confirmation
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You will proceed to  payment. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-row justify-around">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>{closeModal();opentracking()}}
                    >
                      Book
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

</>
  )
}

export default IndividualProductPage
