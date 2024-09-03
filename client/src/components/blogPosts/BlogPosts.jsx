import BlogPost from './blogPost/BlogPost'
import './blogPosts.css';
import {useNavigate} from 'react-router-dom';
import right from '../../assets/right.svg';
import PropTypes from 'prop-types';

const BlogPosts = ({onPostClick}) => {
  const navigate = useNavigate();
  

  return (
    <div className='blogs'>
      <div className="heading">
        <h2>Latest Blogs</h2>
        <button onClick={() => navigate('/blog')}>See All <img src= {right} alt="right-icon" /></button>
      </div>

      <div className="all_posts">
      <BlogPost onPostClick={onPostClick}/>      
      </div>    
    </div>
  )
}

BlogPosts.propTypes = {
  onPostClick: PropTypes.func.isRequired
}
export default BlogPosts