import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/users/userSlice.js";
//create store

const store = configureStore({
    reducer:{
       users: userReducer,
    }
});

export default store;