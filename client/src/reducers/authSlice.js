import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/auth";

const initialState = {
    loading : false,
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    error : ""
}

const authSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        logout: () => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem('user', JSON.stringify(action.payload));
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem('user', JSON.stringify(action.payload));
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;