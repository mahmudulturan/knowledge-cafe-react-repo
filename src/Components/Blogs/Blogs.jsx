import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({ handlerMarkAsRead, handlerBookmark, clicked }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog blog={blog}
        handlerMarkAsRead={handlerMarkAsRead} handlerBookmark={handlerBookmark} clicked={clicked} key={blog.id}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
    handlerMarkAsRead: PropTypes.func.isRequired,
    handlerBookmark: PropTypes.func.isRequired,
    clicked: PropTypes.bool.isRequired,
}

export default Blogs;
