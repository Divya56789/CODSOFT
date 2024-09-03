import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCommentToPost } from '../actions/posts';

const SingleBlogPost = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.blogPosts.find((post) => post._id === id)
  );

  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  if (!post) return <div>Loading...</div>;

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      dispatch(addCommentToPost({ postId: post._id, comment }));
      setComment(''); 
    }
  };

  return (
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <img src={post.attachment} alt="picture" />
        <p className="post-content">{post.content}</p>

        {/* Highlighted Section: Comment Form */}
        <div className="comment-section">
          <h3>Comments</h3>
          <ul>
            {post.comments && post.comments.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
          <textarea 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            placeholder="Add your comment" 
          />
          <button onClick={handleCommentSubmit}>Add Comment</button>
        </div>
        {/* End of Highlighted Section */}
      </div>

  );
};

export default SingleBlogPost;
