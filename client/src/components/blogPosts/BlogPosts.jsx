import BlogPost from './blogPost/BlogPost'
import './blogPosts.css';
import {useNavigate} from 'react-router-dom';
import right from '../../assets/right.svg';

const BlogPosts = () => {
  const navigate = useNavigate();
  
  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className='blogs'>
      <div className="heading">
        <h2>Latest Blogs</h2>
        <button onClick={() => navigate('/blog')}>See All <img src= {right} alt="right-icon" /></button>
      </div>

      <div className="all_posts">
      <BlogPost onPostClick={handlePostClick}/>      
      </div>    
    </div>
  )
}

export default BlogPosts