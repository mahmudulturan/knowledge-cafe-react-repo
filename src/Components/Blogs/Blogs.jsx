import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h1>Blogs</h1>
            {
                blogs.map((blog,idx) => <Blog blog={blog} key={idx}></Blog>)
            }
        </div>
    );
};

export default Blogs;