import './nav.css';
import userPic from  '../../assets/user.jpg';
import create from '../../assets/create.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import search from '../../assets/search.svg';
import { useState } from 'react';

const Nav = () => {
  const user = useSelector(state => state.users.user);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/blog?query=${searchTerm}`);
    }
  };
  return (
    <nav>
      <div className="nav_left">
          <h3>Blogging Platform</h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {/* <li>
              <Link to="/profile">Profile</Link>
            </li> */}
          </ul>
      </div>
      <div className="nav_right">
      <div className="search-container">
          <input 
            type="text" 
            placeholder="Search Post..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="search-button">
            <img src={search} alt="search-icon" />
          </button>
        </div>
          <Link to='/create' className='write'>
            <img src={create} alt="create_icon" />
            <p>write</p>
          </Link>
          {user ? (<img src={userPic} alt="pic" className='user_avatar' onClick={() => navigate('/profile')}/>) : (
              <button className='button' onClick={() => navigate('/auth')}>Sign In</button>
          )}
      </div>
    </nav>
  )
}

export default Nav