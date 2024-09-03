import './header.css';
import user from '../../assets/user.jpg';
import { useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes  from 'prop-types';

const Header = ({onPostClick}) => {
  const post = useSelector(state => state.posts.blogPosts);

  return (
    <header>
      <div className="welcome_motive">
          <p>WELCOME TO BLOGGING PLATFORM</p>
          <h1>Craft narratives ✍️ that ignite <span>inspiration</span> 💡,<br /> <span>knowledge</span> 📙, and <span>entertainment</span> 🎬</h1>
      </div>
      {post.map((post) => {
        return <div className="latest_blog" key={post._id} onClick={() => onPostClick(post._id)}>
            <img src={post.attachment} alt="blgPost_img" className="latest_blog_attchment"/>
        <div className="latest_blog_content">
            <div className="content_header">
              <img src={user} alt="user_pic" className='user_avatar'/>
              <p>{post.creator}</p>
              <p>•</p>
              <p>{moment(post.createdAt).fromNow()}</p>
            </div>
            <div className="content">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
          </div>
        </div>
      </div>
      }).slice(-1)}
    </header>
  )
}
Header.propTypes = {
  onPostClick: PropTypes.func.isRequired
}
export default Header;