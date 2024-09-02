import axios from 'axios';

const baseUrl = 'http://localhost:5000/users';

export const signIn = async (data) => {
    try {
        const res = await axios.post(`${baseUrl}/signIn`, data);
        console.log("sign in", res.data);
        return res.data;
    } catch (error) {
        console.log("signin",error);
        throw error;
    }
}

export const signUp = async (data) => {
    try {
        const res = await axios.post(`${baseUrl}/signUp`, data);
        console.log("sign up", res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}    