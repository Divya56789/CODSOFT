import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "../actions/posts";

const initialState = {
    loading : false,
    blogPosts : [],
    error: ''
}


const postslice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.blogPosts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.blogPosts = [];
            state.error = action.payload;
        })
    }
})

export default postslice.reducer;