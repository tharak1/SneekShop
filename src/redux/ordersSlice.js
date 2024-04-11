import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage ,firestore} from '../config/firebase'; // Assuming you have a firebase.js file exporting your Firestore instance
import { getFirestore, addDoc,collection, where, getDocs, doc,updateDoc, setDoc, deleteDoc,serverTimestamp ,query} from 'firebase/firestore';


// const productRef = collection(getFirestore(), "products");
// Async thunks
export const fetchOrders = createAsyncThunk(
  'products/fetchOrders',
  async () => {
    const ordersCollection = collection(firestore, 'orders'); // Reference the products collection
    const q = query(ordersCollection); // Create an empty query to fetch all products

    const orderSnapshot = await getDocs(q); // Get all products

    const products = orderSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  }
);








// Products slice
export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle async thunks
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});


export const getOrders = (state)=>state.orders;


export default ordersSlice.reducer;