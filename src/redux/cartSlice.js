import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {firestore} from '../config/firebase'


// Future lo try to use userId here iteslf


export const fetchCartItems = createAsyncThunk('cartItems/fetchCartItems',async(userId)=>{
  const docRef = doc(firestore, "cart", userId);
  const docSnap = await getDoc(docRef);
  let arr = []


  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    arr = docSnap.data().cartItems;

  } else {
    console.log("No such document!");
  }
  return arr;
});



export const addToCart = createAsyncThunk('cartItems/addToCart',async({ productData, userId })=>{

  const docRef = doc(firestore, "cart", userId);
  const docSnap = await getDoc(docRef);

  let cartItemData = null;
  console.log(productData);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    let arr = docSnap.data().cartItems;


    cartItemData = {
      id:productData.id,
      productName:productData.title,
      ProductImage:productData.CoverimageUrl,
      price:productData.price,
      quantity:1
    };

    arr.push(cartItemData);

    console.log(cartItemData);


    const updatedArray = await setDoc(docRef, { cartItems: arr }, { merge: true });
    console.log(updatedArray);

  } else {
    console.log("No such document!");
  }
  return cartItemData;
});

export const deleteFromCart = createAsyncThunk('cartItems/deleteFromCart',async({ productId, userId })=>{
  const docRef = doc(firestore, "cart", userId);
  const docSnap = await getDoc(docRef);

  let arr = []

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    arr = docSnap.data().cartItems;

    arr = arr.filter(item => item.id !== productId);

    await setDoc(docRef, { cartItems: arr }, { merge: true });

  } else {
    console.log("No such document!");
  }
  return arr;
});


export const updateCartItemQuantity = createAsyncThunk('cartItems/updateCartItemQuantity',async({ productId, userId ,quantity })=>{
  const docRef = doc(firestore, "cart", userId);
  const docSnap = await getDoc(docRef);

  let arr = []

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    arr = docSnap.data().cartItems;

    const index = arr.findIndex(item => item.id === productId);

    if (index !== -1) {
      arr[index] = {
        ...arr[index],
        quantity: quantity
      };
    }
    console.log(arr);

    await setDoc(docRef, { cartItems: arr }, { merge: true });

  } else {
    console.log("No such document!");
  }
  return arr;
})




export const cartItemsSlice = createSlice({
  name:"cartItems",
  initialState:{
    items:[],
    status:'idle', 
    error:null,
  },
  reducers:{},
  extraReducers :(builder)=>{
    builder
    .addCase(fetchCartItems.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCartItems.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(fetchCartItems.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(addToCart.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(addToCart.fulfilled,(state,action)=>{
      state.status = 'succeeded';
      state.items.push(action.payload);
    })
    .addCase(addToCart.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(deleteFromCart.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(deleteFromCart.fulfilled,(state,action)=>{
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(deleteFromCart.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })

    .addCase(updateCartItemQuantity.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(updateCartItemQuantity.fulfilled,(state,action)=>{
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(updateCartItemQuantity.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })

  }

});

export const getCartItems = (state)=>state.cartItems.items;

export default cartItemsSlice.reducer;