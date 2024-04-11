// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { firestore } from '../config/firebase'; // Import your Firestore instance
// import { getFirestore, addDoc,collection, where, getDoc, doc,updateDoc, setDoc, deleteDoc,serverTimestamp ,query} from 'firebase/firestore';

// // Async thunks
// export const fetchCart = createAsyncThunk(
//   'cart/fetchCart',
//   async (userID) => {
//     try {
//        // Ensure you have a Firestore instance
//       const cartRef = doc(collection(firestore, 'cart'), userID);
//       const cartSnapshot = await getDoc(cartRef);

//       if (cartSnapshot.exists) {
//         return cartSnapshot.data(); // Return cart items if found
//       } else {
//         return []; // Return empty array if cart doesn't exist
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       return Promise.reject(error); // Re-throw for error handling in reducers
//     }
//   }
// );


// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async (userID)=>{

//   }
// )

// export const updateCart = createAsyncThunk(
//   'cart/updateCart',
//   async (cartItems) => {
//     await firestore.collection('carts').doc('userCart').set({ items: cartItems });
//     return cartItems;
//   }
// );

// // Cart slice
// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     // Reducers here if needed, like addItem, removeItem, etc.
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(updateCart.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(updateCart.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(updateCart.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const getCart = (state) => state.cart;

// export default cartSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action){
            state.push(action.payload)            
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id != action.payload.id);
        }
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;