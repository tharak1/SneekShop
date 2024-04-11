import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage ,firestore} from '../config/firebase'; // Assuming you have a firebase.js file exporting your Firestore instance
import { getFirestore, addDoc,collection, where, getDocs, doc,updateDoc, setDoc, deleteDoc,serverTimestamp ,query} from 'firebase/firestore';


// const productRef = collection(getFirestore(), "products");
// Async thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const productsCollection = collection(firestore, 'products'); // Reference the products collection
    const q = query(productsCollection); // Create an empty query to fetch all products

    const productSnapshot = await getDocs(q); // Get all products

    const products = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId) => {
    try{
      const productRef = doc(collection(firestore, 'products'), productId);
      await deleteDoc(productRef);
    }
    catch(e){
      console.log(e);
    }
    return productId; // Return the deleted product ID
  }
);

export const updateProductSingle = createAsyncThunk(
  'products/updateProductSingle',
  async (updatedProductData) => {
    const productId = updatedProductData.id; // Extract the id from the data
    const productRef = doc(firestore, 'products', productId); // Reference the product document
    await updateDoc(productRef, updatedProductData); // Update the document
    return updatedProductData; // Return the entire updated product data  
  }
);

// export const createProduct = createAsyncThunk(
//   'products/createProduct',
//   async (productData) => {
//     const docRef = await firestore.collection('products').add(productData);
//     return { id: docRef.id, ...productData }; // Return the created product data
//   }
// );

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (productData) => {
    const productsCollection = collection(firestore, 'products');
    const newProductRef = await addDoc(productsCollection, productData);
    return { id: newProductRef.id, ...productData }; // Return the created product data
  }
);







// Products slice
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle async thunks
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      })
      .addCase(updateProductSingle.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.items = state.items.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});


export const getProducts = (state)=>state.products;


export default productsSlice.reducer;
