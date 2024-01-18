import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../config/baseurl";
import { resetErrAction } from "../globalActions/globalAction";
//axios for http req

//createAsyncThunk is for external server req

//create Slice handle action

//initial state
const initialState = {
    loading: false,
    error: null,
    users: [],
    user :{},
    isAdded: false,
    isUpdated: false,
    isDeleted: false,
    userAuth:{
        loading:false,
        error:null,
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    }
}

//login action
export const loginAction = createAsyncThunk('users/login', async({email,password}, {rejectWithValue, getState, dispatch})=>{
    try{
        //make http req
        const response = await axios.post(`${baseURL}/users/login`, {
            email,
            password,
        })
        //save token to local storage
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        return response.data;
    }catch(e){
        console.log(e)
        return rejectWithValue(e?.response?.data);
    }
})

//register action
//login action
export const registerAction = createAsyncThunk('users/register', async(payload, {rejectWithValue, getState, dispatch})=>{

    try{
        const {email,
            password,
            username, 
            zonesChecker,
            description,
            boolAdmin,
            file,
            } = payload;
        
        console.log(email,
            password,
            username, 
            zonesChecker,
            description,
            boolAdmin,
            file,);
        //token
        const token = getState()?.users?.userAuth?.userInfo?.token;
        const config = {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }

        //FormData
        const formData = new FormData();
        formData.append("username", username);
        formData.append("description", description);
        formData.append("password", password);
        formData.append("isAdmin", boolAdmin);
        formData.append("zone", zonesChecker);
        formData.append("email", email);

        file.forEach((file) => {
            formData.append("file", file);
        });

        
        //make http req
        const response = await axios.post(`${baseURL}/users/register`, formData, config)

        //save token to local storage
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        return response.data;
    }catch(e){
        console.log(e)
        return rejectWithValue(e?.response?.data);
    }
})

//users slice
const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers: (builder)=>{
        //handle actions

        //register
        builder.addCase(registerAction.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(registerAction.fulfilled, (state, action)=>{
            state.user = action.payload;
            state.loading = false;
            state.isAdded = true;
        });
        builder.addCase(registerAction.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
            state.user = null;
            state.isAdded = false;
        });

        //login
        builder.addCase(loginAction.pending, (state, action)=>{
            state.userAuth.loading = true;
        });
        builder.addCase(loginAction.fulfilled, (state, action)=>{
            state.userAuth.userInfo = action.payload;
            state.userAuth.loading = false;
        });
        builder.addCase(loginAction.rejected, (state, action)=>{
            state.userAuth.error = action.payload;
            state.userAuth.loading = false;
        });

        //error handling
        builder.addCase(resetErrAction.pending, (state, action)=>{
            state.userAuth.error = null;
            state.error = null;
        });

        
    } 
});

//generate reducer, use in store
const userReducer = usersSlice.reducer;

export default userReducer;