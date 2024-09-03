import { createSlice } from "@reduxjs/toolkit"
import { addCommentToPost, fetchPosts } from "../actions/posts";

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
        .addCase(addCommentToPost.fulfilled, (state, action) => {
            const updatedPost = action.payload;
            state.blogPosts = state.blogPosts.map(post => post._id === updatedPost._id ? updatedPost : post);
        });
    }
})

export default postslice.reducer;