import express from 'express';
import { createBlogPost, deleteBlogPost, getBlogPosts, updateBlogPost , addCommentToPost} from '../controllers/blogPostController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/getAll', getBlogPosts);
router.post('/create', createBlogPost);
router.patch('/update/:id', auth, updateBlogPost);
router.delete('/delete/:id',auth, deleteBlogPost);
router.put('/add/comment', addCommentToPost)

export default router;