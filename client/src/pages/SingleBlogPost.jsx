import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleBlogPost = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.blogPosts.find((post) => post._id === id)
  );

  if (!post) return <div>Loading...</div>;

  return (
    // <div style={{display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center",textAlign: "center"}}>
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <img src={post.attachment} alt="picture" />
        <p className="post-content">{post.content}</p>
      </div>
    // </div>

  );
};

export default SingleBlogPost;
