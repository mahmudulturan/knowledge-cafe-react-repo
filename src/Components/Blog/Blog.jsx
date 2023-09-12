import PropTypes from 'prop-types';
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs';


const Blog = ({blog, handlerMarkAsRead, handlerBookmark, clicked}) => {
    const {cover_img, title, author_img, author, posted_date, reading_time, hashtags, id} = blog;

    return (
        <div className=' mb-9 border-b-2 pb-4'>
            <img className="w-full rounded-lg" src={cover_img} alt={`cover imaga bout ${title}`} />
            <div className=" space-y-4">
            <div className="flex justify-between mt-8">
                <div className="flex md:gap-6">
                    <img className=" w-16" src={author_img} alt={`image of author ${author}`} />
                    <div>
                        <h3 className="md:text-2xl text-lg font-bold">{author}</h3>
                        <h4 className="font-semibold text-base text-[#11111199]">{posted_date}</h4>
                    </div>
                </div>
                <div className='flex items-center md:gap-2'>
                    <h4 className="font-semibold text-xl text-[#11111199]">{reading_time} min read</h4>
                    <button onClick={()=> {handlerBookmark(title,id)}}> {clicked? <BsBookmarksFill></BsBookmarksFill> : <BsBookmarks></BsBookmarks>} </button>
                </div>
            </div>
            <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
            {
                hashtags.map((hashtag,indx) => <a className='text-xl text-blue-600 font-semibold' key={indx}>{hashtag} </a>)
            } <br />
            <button onClick={()=> handlerMarkAsRead(reading_time, title)} className='text-xl text-blue-600 font-semibold'>Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handlerMarkAsRead: PropTypes.func.isRequired,
    handlerBookmark: PropTypes.func.isRequired,
    clicked: PropTypes.bool.isRequired,
}

export default Blog;