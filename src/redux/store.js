import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartItemsReducer from "./cartSlice";
import productsReducer from "./productsSlice"
import adminUsersFetchReducer from "./adminUsersFetch";
import ordersReducer from "./ordersSlice";
import UserOrdersReducer from './userOrdersSlice';

import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";


const persistConfig = {
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers({
    user:userReducer,
    cartItems:cartItemsReducer,
    products:productsReducer,
    adminUsers:adminUsersFetchReducer,
    orders:ordersReducer,
    UserOrders:UserOrdersReducer
});

const persistedReducer = persistReducer(persistConfig,reducer);


export const store = configureStore({
    reducer : persistedReducer
});


// // import { configureStore } from '@reduxjs/toolkit';
// // import { persistStore } from 'redux-persist';
// // import { persistedReducer } from "./persistantStorage";

// // export default () => {
// //   const store = configureStore({
// //     reducer: persistedReducer,
// //   });

// //   const persistor = persistStore(store);
// //   return { store, persistor };
// // };

// import { configureStore ,combineReducers} from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';


// import storage from 'redux-persist/lib/storage';
// import userReducer from './userSlice';
// import cartReducer from './cartSlice';
// import productsReducer from './productsSlice';
// import adminUsersFetchReducer from './adminUsersFetch';
// import ordersReducer from './ordersSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   products: productsReducer,
//   adminUsers: adminUsersFetchReducer,
//   orders: ordersReducer,
// }));

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export default store;



