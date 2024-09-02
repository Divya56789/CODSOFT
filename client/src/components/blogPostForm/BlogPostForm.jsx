import { useState } from 'react';
import './blogPostForm.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import sent from '../../assets/sent.svg';
import { useDispatch } from "react-redux";
import { createPost } from '../../actions/posts';


const BlogPostForm = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({title : "", description: "",content: "", attachment: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(postData.content, 'text/html');
    const plainTextContent = doc.body.textContent || "";

    const cleanedPostData = {
      ...postData, content: plainTextContent,
    };

    dispatch(createPost(cleanedPostData));

    clearformData();
  }

  const handleChange = (e) => {
    setPostData({...postData, [e.target.name] : e.target.value})
  }

  const handleContentChange = (value) => {
    setPostData({...postData, content: value});
  }

  const clearformData = () => {
    setPostData({title : " ", description: " ",content: " ", attachment: " "});
  }
  return (
      <form method="post"  onSubmit={handleSubmit} >

        <div className="create_blog_post">
          <div className="write_content" >
            <h1>write content</h1>
            <ReactQuill theme="snow" value={postData.content} onChange={handleContentChange} placeholder='Write Content'/>
          </div>

          <div className="input_area">
            <h1>Form</h1>
            <input type="text" name="title" placeholder='Title' value={postData.title} onChange={handleChange} required/>

            <textarea name="description"  cols="20" rows="5" value={postData.description} placeholder='write description' onChange={handleChange} required></textarea>

            <input type="text" name="attachment" value={postData.attachment} onChange={handleChange} placeholder='Enter Image link address'/>
          </div>
        </div>

        <div className="submit_form_data">
          <button type="submit">Publish
            <img src={sent} alt="sent_icon" />
            </button>
        </div>
      </form>
  )
}

export default BlogPostForm