import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css';
import { BlogContext } from '../../App';
import { useContext } from 'react';

const Home = () => {

    // const [blogs , setBlogs]= useState([]);
    const [blogs, setBlogs] = useContext(BlogContext);
    // console.log(blogs);

    useEffect(()=>{
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data));

    },[])

    return (
      <div className="home-container">
        {blogs.map((blogData, index) => (
          <Blog key={index} blogData={blogData}></Blog>
        ))}
      </div>
    );
};

export default Home;