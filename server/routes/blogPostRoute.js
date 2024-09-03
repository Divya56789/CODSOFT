import express from 'express';
import { createBlogPost, getBlogPosts, addCommentToPost} from '../controllers/blogPostController.js';

const router = express.Router();

router.get('/getAll', getBlogPosts);
router.post('/create', createBlogPost);
router.put('/add/comment', addCommentToPost)

export default router;