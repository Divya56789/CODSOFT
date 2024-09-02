import { useDispatch } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { useEffect } from "react";
import { Header , BlogPosts} from "../components";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])
  
  return (
    <div style={{display: "flex", flexDirection: "column", gap:"2rem"}}>
      <Header/>
      <BlogPosts/>
    </div>
  )
}

export default Home