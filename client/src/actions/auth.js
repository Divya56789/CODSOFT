import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/auth';


export const signIn = createAsyncThunk('users/signIn', async(data) => {
    const result = await api.signIn(data);
    return result;
})

export const signUp = createAsyncThunk('users/signUp', async(data) => {
    return await api.signUp(data);
})