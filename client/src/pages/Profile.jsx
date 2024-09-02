import { useNavigate } from 'react-router-dom';
import user from '../assets/user.jpg';
import { useDispatch} from 'react-redux';
import { logout } from '../reducers/authSlice';


const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout())
    navigate('/auth')
  }
  return (
    <div className="profile_page">
      <div className="profile_page_content">
      <p>Profile picture</p>
      <div >
        <img src={user} alt="user_pic" className="profle-pic"/>
      </div>
      <p>Username</p>
      <input type="text"/>
      <p>EmailId</p>
      <input type="text" />
      <button className='button' onClick={logOut}>Logout</button>
      </div>
    </div>
  )
}

export default Profile