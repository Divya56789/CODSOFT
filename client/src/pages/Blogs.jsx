import { useNavigate } from "react-router-dom";
import BlogPost from "../components/blogPosts/blogPost/BlogPost"

const Blog = () => {
  const navigate = useNavigate();
  
  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div style={{display: "flex", flexDirection: "row", gap:"2em", flexWrap:"wrap", flex:"1"}}>
      <BlogPost onPostClick={handlePostClick}/>
    </div>
  )
}

export default Blog;