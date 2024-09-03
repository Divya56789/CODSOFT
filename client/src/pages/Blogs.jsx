import { useNavigate } from "react-router-dom";
import BlogPost from "../components/blogPosts/blogPost/BlogPost"
import { useSelector } from "react-redux";

const Blog = () => {
  const navigate = useNavigate();
  const post = useSelector(state => state.posts);
  
  const query = new URLSearchParams(location.search).get('search');
  const filteredPosts = query 
    ? post.blogPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase())
      )
    : post.blogPosts;

  
  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div style={{display: "flex", flexDirection: "row", gap:"2em", flexWrap:"wrap", flex:"1"}}>
      <BlogPost onPostClick={handlePostClick} searchedPost={filteredPosts}/>
    </div>
  )
}

export default Blog;