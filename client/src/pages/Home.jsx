import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { useEffect } from "react";
import { Header , BlogPosts} from "../components";
import {useNavigate} from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.users) 


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])
  
  const handlePostClick = (id) => {
    if(user.token) navigate(`/blog/${id}`);
    else alert("To view this post, please sign in to read the full blog post.")
  };
  return (
    <div style={{display: "flex", flexDirection: "column", gap:"2rem"}}>
      <Header onPostClick={handlePostClick}/>
      <BlogPosts onPostClick={handlePostClick}/>
    </div>
  )
}

export default Home