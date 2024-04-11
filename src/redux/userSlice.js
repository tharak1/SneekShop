import { Login } from "@mui/icons-material";
import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        LoginUser:(state,action)=>{
            state.user = action.payload;
        },
        LogoutUser:(state)=>{
            state.user = null;
        }
    },

});

export const {LoginUser , LogoutUser} = userSlice.actions;

export const setUser = (state)=>state.user.user;

export default userSlice.reducer;