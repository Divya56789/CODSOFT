import mongoose from "mongoose";

const blogPostSchema = mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    content : String,
    creator : {
        type : mongoose.Types.ObjectId,
        ref : "Users"
    },
    attachment: String,
    comments : [
        {type : String}
    ],
    createdAt : {
        type: Date,
        default: new Date()
    }
}, {collection: "BlogPost"})

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
export default BlogPost;