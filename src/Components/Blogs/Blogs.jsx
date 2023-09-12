import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({ handlerMarkAsRead, handlerBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {blogs.map((blog, idx) => (
        <Blog blog={blog}
        handlerMarkAsRead={handlerMarkAsRead} handlerBookmark={handlerBookmark} key={idx}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
    handlerMarkAsRead: PropTypes.func.isRequired,
    handlerBookmark: PropTypes.func.isRequired,
}

export default Blogs;
