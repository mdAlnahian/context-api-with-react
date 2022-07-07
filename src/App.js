import './App.css';
import { Routes , Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Navbar from './Pages/Navbar/Navbar';
import BlogDetails from './Pages/Blog/BlogDetails';
import { createContext } from 'react';
import { useState } from 'react';

export const BlogContext = createContext(); 

function App() {

  const [blog , setBlog] = useState([]);
  // console.log(blog);

  return (
    <BlogContext.Provider value={[blog, setBlog]}>
      <div className="">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="blog" element={<Blog></Blog>}></Route>
          <Route path="blog/:id" element={<BlogDetails></BlogDetails>}></Route>
        </Routes>
      </div>
    </BlogContext.Provider>
  );
}

export default App;
