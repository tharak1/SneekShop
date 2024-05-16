// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import {firestore} from '../config/firebase';

// export const fetchUserOrders = createAsyncThunk(
//     'UserOrders/fetchUserOrders',
//     async (userId) => {
//       const docRef = doc(firestore, "orders_for_individual_users", userId);
//       const docSnap = await getDoc(docRef);
//       let arr = []
    
    
//       if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//         arr = docSnap.data().cartItems;

//         console.log(arr);
    
//       } else {
//         console.log("No such document!");
//       }

//       return arr;
//     });



//     export const addOrders = createAsyncThunk(
//         'UserOrders/addOrders',
//         async ({orders,userId}) => {
//           const docRef = doc(firestore, "orders_for_individual_users", userId);
//           const docSnap = await getDoc(docRef);
//           let arr = [];
//           if (docSnap.exists()) {
//             console.log("Document data:", docSnap.data());
//             arr = docSnap.data().cartItems;
        
//           } else {
//             console.log("No such document!");
//           }



//           for(let i=0;i<orders.length;i++){
//             arr.push(orders[i]);
//           }

//           const updatedArray = await setDoc(docRef, { orders: arr }, { merge: true });


//           return arr;
//         });




// export const UserOrdersSlice = createSlice({
//     name: 'UserOrders',
//     initialState: {
//       orders: [],
//       status: 'idle',
//       error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       // Handle async thunks
//       builder
//         .addCase(fetchUserOrders.pending, (state) => {
//           state.status = 'loading';
//         })
//         .addCase(fetchUserOrders.fulfilled, (state, action) => {
//           state.status = 'succeeded';
//           state.orders = action.payload;
//         })
//         .addCase(fetchUserOrders.rejected, (state, action) => {
//           state.status = 'failed';
//           state.error = action.error.message;
//         })
//         .addCase(addOrders.pending, (state) => {
//             state.status = 'loading';
//           })
//           .addCase(addOrders.fulfilled, (state, action) => {
//             state.status = 'succeeded';
//             state.orders = action.payload;
//           })
//           .addCase(addOrders.rejected, (state, action) => {
//             state.status = 'failed';
//             state.error = action.error.message;
//           })
//     },
//   });



// export const getUserOrders = (state)=>state.UserOrders;


// export default UserOrdersSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from '../config/firebase';

export const fetchUserOrders = createAsyncThunk(
    'UserOrders/fetchUserOrders',
    async (userId, { rejectWithValue }) => {
      try {
        const docRef = doc(firestore, "orders_for_individual_users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return docSnap.data().orders || [];
        } else {
          console.log("No such document!");
          return [];
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);


export const addOrders = createAsyncThunk(
    'UserOrders/addOrders',
    async ({ orders, userId }, { rejectWithValue }) => {
      try {
        const docRef = doc(firestore, "orders_for_individual_users", userId);
        const docSnap = await getDoc(docRef);
        let arr = [];

        if (docSnap.exists()) {
          arr = docSnap.data().orders || [];
        } else {
          console.log("No such document!");
        }

        arr = [...arr, ...orders];

        await setDoc(docRef, { orders: arr }, { merge: true });

        return arr;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);


export const UserOrdersSlice = createSlice({
    name: 'UserOrders',
    initialState: {
      orders: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserOrders.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchUserOrders.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.orders = action.payload;
        })
        .addCase(fetchUserOrders.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload || action.error.message;
        })
        .addCase(addOrders.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addOrders.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.orders = action.payload;
          })
          .addCase(addOrders.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload || action.error.message;
          });
    },
});

export const getUserOrders = (state) => state.UserOrders;

export default UserOrdersSlice.reducer;
