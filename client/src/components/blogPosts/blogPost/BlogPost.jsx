import './blogPost.css';
import user from '../../../assets/user.jpg'
import {useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';


const BlogPost = ({ onPostClick }) => {
  const post = useSelector(state => state.posts);
  const location = useLocation();
  const allBlogs = ['/blog']

  if (post.loading) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <>
    {!allBlogs.includes(location.pathname) ? 
    (post.blogPosts.slice(0, 5).map((post) => {
      return <div className='blogPost' key={post._id} onClick={() => onPostClick(post._id)}>
      <img src={post.attachment} alt="blogPost_img" />
      <div className="blog_content">
            <div className="blog_header">
              <img src={user} alt="user_pic" className='user_avatar'/>
              <p>{post.creator}</p>
              <p>•</p>
              <p>{moment(post.createdAt).fromNow()}</p>
            </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p> 
        </div>
    </div>
    })) : (
      post.blogPosts.map((post) => {
        return <div className='blogPost' key={post._id} onClick={() => onPostClick(post._id)}>
        <img src={post.attachment} alt="blogPost_img" />
        <div className="blog_content">
              <div className="blog_header">
                <img src={user} alt="user_pic" className='user_avatar'/>
                <p>{post.creator}</p>
                <p>•</p>
                <p>{moment(post.createdAt).fromNow()}</p>
              </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p> 
          </div>
      </div>
      })   
    )   
    }
    </>
  )
}

BlogPost.propTypes = {
  onPostClick: PropTypes.func.isRequired
}
export default BlogPost;

