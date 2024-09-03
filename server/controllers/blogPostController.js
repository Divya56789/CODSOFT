import BlogPost from "../models/blogPostModel.js";


export const getBlogPosts = async (req, res) => {
    try {
        const blogPost = await BlogPost.find()
        res.status(200).json({message: "Successfully get All Posts.", blogPost})
    } catch (error) {
        res.status(400).json({message : error})
    }
}

export const createBlogPost = async (req, res) => {
    const post = req.body;
    const newBlogPost = new BlogPost({...post, creator : req.userId, createdAt: new Date().toISOString()});

    if(!req.userId) return res.status(400).json({message: "Unauthenticated"})
    try {
        await newBlogPost.save();
        res.status(209).json({message: "Successfully created BlogPost.", newBlogPost})
    } catch (error) {
        res.status(409).json({message: error})
    }
}



export const addCommentToPost = async (req, res) => {
    const postId = req.body.postId;
    const comment = req.body.comment;
    try {
        const post =await BlogPost.findById(postId);
        const previousComment = post.comments;
        previousComment.push(comment);
        const updatedPost = await BlogPost.findByIdAndUpdate(postId, {comments : previousComment}, {new: true});
        res.json({message: "Successfully updated post", updatedPost})
    } catch (error) {
        res.status(500).json({message: "Server error", error})

    }

}