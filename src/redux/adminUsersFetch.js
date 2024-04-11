import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';

// Assuming you have a firebase.js file exporting your Firestore instance
import { firestore } from '../config/firebase';

export const fetchAllUsers = createAsyncThunk(
  'adminUsersFetch/fetchAllUsers', // More descriptive name
  async () => {
    const usersCollection = collection(firestore, 'users'); // Reference the users collection
    const q = query(usersCollection); // Create an empty query to fetch all users

    const usersSnapshot = await getDocs(q); // Get all users

    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return users;
  }
);

export const adminUsersFetchSlice = createSlice({
  name: 'adminUsersFetch', // Corrected typo
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAllUsers = (state) => state.adminUsers.users; // Access users directly

export default adminUsersFetchSlice.reducer;
