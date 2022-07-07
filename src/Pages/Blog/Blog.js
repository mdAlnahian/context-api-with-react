import React from 'react';
import './Blog.css';
import { useNavigate } from 'react-router-dom';
import Indicator from '../Assets/Union-1.svg'

const Blog = ({blogData}) => {
  const { admin, imageURL, title, _id, blog: blogBody } = blogData;
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <div className="blog-image-container">
        <img src={imageURL} alt="" />
      </div>
      <div className="blog-content">
        <div>
          <h1>{title}</h1>
          <div className="author-name">
            <img src={Indicator} alt="" />
            <p>{admin}</p>
          </div>
        </div>
        <p className="blog-preview">
          {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
          <span className="read-more" onClick={() => navigate(`/blog/${_id}`)}>
            ...Read More
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;