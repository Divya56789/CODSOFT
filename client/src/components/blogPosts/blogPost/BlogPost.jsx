import './blogPost.css';
import user from '../../../assets/user.jpg'
import {useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';


const BlogPost = ({ onPostClick, searchedPost =[] }) => {
  const post = useSelector(state => state.posts.blogPosts);
  const location = useLocation();
  const allBlogs = ['/blog']

  if (post.loading) {
    return <div className='container'><h1>Loading...</h1></div>;
  }

  return (
    <>
    {!allBlogs.includes(location.pathname) ? 
    (post.slice(0, 5).map((post) => {
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
      searchedPost.length === 0 ? <div><h1>No Posts found</h1></div> :
      searchedPost.map((post) => {
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
  onPostClick: PropTypes.func.isRequired,
  searchedPost: PropTypes.array
}
export default BlogPost;

