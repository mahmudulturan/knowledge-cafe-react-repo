import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs';


const Blog = ({blog}) => {
    const {cover_img, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    const [clicked, setClicked] = useState(false)
    const handlerClicked = ()=>{
        setClicked(!clicked)
    }

    return (
        <div className=' my-9'>
            <img className="w-full rounded-lg" src={cover_img} alt={`cover imaga bout ${title}`} />
            <div className=" space-y-4">
            <div className="flex justify-between mt-8">
                <div className="flex gap-6">
                    <img className=" w-16" src={author_img} alt={`image of author ${author}`} />
                    <div>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <h4 className="font-semibold text-base text-[#11111199]">{posted_date}</h4>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <h4 className="font-semibold text-xl text-[#11111199]">{reading_time} read</h4>
                    <button onClick={handlerClicked}> {clicked? <BsBookmarks></BsBookmarks> : <BsBookmarksFill></BsBookmarksFill>} </button>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            {
                hashtags.map((hashtag,indx) => <a className='text-xl text-blue-600 font-semibold' key={indx}>{hashtag} </a>)
            } <br />
            <button className='text-xl text-blue-600 font-semibold'>Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;