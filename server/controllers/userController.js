import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Users from '../models/userModel.js';

export const signIn = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser =await Users.findOne({email});
        if(!existingUser) return res.status(404).json({message: "User doesn't exist with this email id."});

        const isPasswordCorrect =await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign({email : existingUser.email, id : existingUser._id}, process.env.SECRET, {expiresIn: "1h"});

        res.status(200).json({message: "User successfully signed In", user: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Server error", error})
    }
}

export const signUp = async (req, res) => {
    const {email, password, firstName, lastName} = req.body;
    try {
        const existingUser =await Users.findOne({email});
        if(existingUser) return res.status(400).json({message: "User already exists with this email id"});

        const hashedPassword =await bcrypt.hash(password, 12);

        const newUser =await Users.create({email,firstName, lastName, password : hashedPassword});
        const token = jwt.sign({email : newUser.email, id : newUser._id}, process.env.SECRET, {expiresIn: "1h"});

        res.status(201).json({message: "User successfully signed Up", user: newUser, token})
    } catch (error) {
        res.status(500).json({message: "Server error", error})

    }
}