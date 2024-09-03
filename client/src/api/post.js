import axios from 'axios';

const baseUrl = 'http://localhost:5000/blogPost';

export const fetchPosts = async () => {
    try {
        const res = await axios.get(`${baseUrl}/getAll`); 
        return res.data.blogPost;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createPost = async (newPost) => {
    try {
        const res = await axios.post(`${baseUrl}/create`, newPost);
        return res.data.blogPost;
    } catch (error) {
        console.log("create post error",error);
        throw error;
    }
}
export const addCommentToPost = async (post) => {
    try {
        const res = await axios.put(`${baseUrl}/add/comment`, post);
        return res.data.updatedPost;
    } catch (error) {
        console.log("add comment error",error);
        throw error;
    }
}