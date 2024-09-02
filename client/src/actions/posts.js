import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/post';


export const fetchPosts = createAsyncThunk('blogPost/getAll', async() => {
    return await api.fetchPosts();
})

export const createPost = createAsyncThunk('blogPost/create', async(newPost) => {
    return await api.createPost(newPost);
})