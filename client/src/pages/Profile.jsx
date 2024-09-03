import { useNavigate } from 'react-router-dom';
import userPic from '../assets/user.jpg';
import { useDispatch, useSelector} from 'react-redux';
import { logout } from '../reducers/authSlice';


const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user.user)

  const logOut = () => {
    dispatch(logout())
    navigate('/auth')
  }
  return (
    <div className="profile_page">
      <div className="profile_page_content">
        <div >
          <h3>Profile picture</h3>
          <img src={userPic} alt="user_pic" className="profle-pic"/>
        </div>
        <div>
          <h3>Username</h3>
          <p className='user-info'>{`${user.firstName} ${user.lastName}`}</p>
        </div>
        <div>
          <h3>Email Id</h3>
          <p className='user-info'>{user.email}</p>
        </div>
        
        <button className='logout' onClick={logOut}>Logout</button>
      </div>
    </div>
  )
}

export default Profile