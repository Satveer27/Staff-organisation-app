import {createAsyncThunk} from "@reduxjs/toolkit";

//reset error action
export const resetErrAction = createAsyncThunk('resetErrorAction',()=>{
    return {};
})


//reset success action
export const resetSuccessAction = createAsyncThunk('resetSuccessAction',()=>{
    return {};
})

