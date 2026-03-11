import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore=configureStore({
    reducer:{
        cart:cartReducer,//this is the app reducer coming from different slices
    }
})
export default appStore;