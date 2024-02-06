import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../config/baseurl";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalAction";

//axios for http req

//createAsyncThunk is for external server req

//create Slice handle action

//initial state
const initialState = {
    loading: false,
    error: null,
    users: [],
    user :{},
    zones:[],
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
});

//fetch action
export const fetchAllUser = createAsyncThunk('users/fetch All', async(payload, {rejectWithValue, getState, dispatch})=>{
    try{
         //token
         const token = getState()?.users?.userAuth?.userInfo?.token;
         const config = {
             headers:{
                 Authorization: `Bearer ${token}`, 
             }
         }

        //make http req
        const response = await axios.get(`${baseURL}/users/allUsers`, config);
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
            phoneNumber,
            employeeIdNo,
            role
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
        formData.append("phoneNumber", phoneNumber);
        formData.append("employeeIdNo", employeeIdNo);
        formData.append("role", role);

        file.forEach((file) => {
            formData.append("file", file);
        });

        
        //make http req
        const response = await axios.post(`${baseURL}/users/register`, formData, config);
        return response.data;
    }catch(e){
        console.log(e)
        return rejectWithValue(e?.response?.data);
    }
})

//fetch all zones
export const getUserZonesAction = createAsyncThunk('users/fetch-zone', async(payload, {rejectWithValue, getState, dispatch})=>{
    try{
        //make http req
        console.log('yes')
        const response = await axios.get(`${baseURL}/users/zone`);
        console.log(response.data)
        return response.data;

    }catch(e){
        console.log(e)
        return rejectWithValue(e?.response?.data);
    }
})

//register action
//login action
export const updateUserAction = createAsyncThunk('users/update', async(payload, {rejectWithValue, getState, dispatch})=>{

    try{
        const {email,
            password,
            username, 
            zonesChecker,
            description,
            boolAdmin,
            file,
            phoneNumber,
            employeeIdNo,
            id,
            role
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
        formData.append("phoneNumber", phoneNumber);
        formData.append("employeeIdNo", employeeIdNo);
        formData.append("role", role);

        file.forEach((file) => {
            formData.append("file", file);
        });

        
        //make http req
        const response = await axios.put(`${baseURL}/users/${id}/updateUsers`, formData, config);
        return response.data;
    }catch(e){
        console.log(e)
        return rejectWithValue(e?.response?.data);
    }
})

//delete user
export const deleteUserAction = createAsyncThunk('users/deleteUser', async(payload, {rejectWithValue, getState, dispatch})=>{
    try{
        const {id} = payload
        //token
        const token = getState()?.users?.userAuth?.userInfo?.token;
        const config = {
            headers:{
                Authorization: `Bearer ${token}`,
                
            }
        }
        //make http req
        const response = await axios.delete(`${baseURL}/users/${id}/delete`, config);
        return response.data;

    }catch(e){
        console.log(e)
        return rejectWithValue(e?.response?.data);
    }
})

//update logout action
export const logoutAction = createAsyncThunk('users/logout', async(payload, {rejectWithValue, getState, dispatch})=>{
    localStorage.removeItem('userInfo');
    return true;  
})


//fetch single user
export const fetchSingleUser = createAsyncThunk('users/fetch-single', async(payload, {rejectWithValue, getState, dispatch})=>{
    try{
        const {id} = payload;
        console.log(payload)
        //token
        const token = getState()?.users?.userAuth?.userInfo?.token;
        const config = {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
        //make http req
        const response = await axios.get(`${baseURL}/users/${id}`,config);
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

        //fetch users
        builder.addCase(fetchAllUser.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(fetchAllUser.fulfilled, (state, action)=>{
            state.users = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchAllUser.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
            state.users = null;
        });

        //fetch single user
        builder.addCase(fetchSingleUser.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(fetchSingleUser.fulfilled, (state, action)=>{
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchSingleUser.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
            state.user = null;
        });

        //delete user
        builder.addCase(deleteUserAction.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(deleteUserAction.fulfilled, (state, action)=>{
            state.users = action.payload;
            state.loading = false;
            state.isDeleted = true;
        });
        builder.addCase(deleteUserAction.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
            state.users = null;
            state.isDeleted = false;
        });

        //logout action
        builder.addCase(logoutAction.fulfilled, (state, action)=>{
            state.userAuth.userInfo = null
        });

        //fetch users zone
        builder.addCase(getUserZonesAction.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(getUserZonesAction.fulfilled, (state, action)=>{
            state.zones = action.payload;
            state.loading = false;
        });
        builder.addCase(getUserZonesAction.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
            state.zones = null;
        });

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

        //update User
        builder.addCase(updateUserAction.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(updateUserAction.fulfilled, (state, action)=>{
            state.user = action.payload;
            state.loading = false;
            state.isUpdated = true;
            state.error = null;
        });
        builder.addCase(updateUserAction.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
            state.user = null;
            state.isUpdated = false;
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

        //reset success
        builder.addCase(resetSuccessAction.pending, (state, action)=>{
            state.isAdded = false;
            state.isUpdated = false;
            state.isDeleted =false;
        })

    } 
});

//generate reducer, use in store
const userReducer = usersSlice.reducer;

export default userReducer;