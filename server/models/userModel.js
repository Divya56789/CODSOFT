import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, {collection: "Users"})

const Users = mongoose.model('Users', userSchema);
export default Users;