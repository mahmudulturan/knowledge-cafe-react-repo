import PropTypes from 'prop-types';

const Bookmarks = ({readingTime, bookmarks}) => {
    
    return (
        <div className="w-1/3">
            <div className='fixed'>
            <div className="bg-[#6047EC1A] py-5 mb-6 px-12 rounded-lg border-2 border-solid border-[#6047EC]">
                <h4 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {readingTime} min</h4>
            </div>
            <div className="px-7 py-7 bg-[#1111110D] rounded-lg ">
                <h4 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h4>
                <div>
                    {
                        bookmarks.map((bookmark, inx)=> <h1 key={inx} className="text-lg font-semibold p-5 bg-[#FFF] rounded-lg my-4">{bookmark}</h1>
                        )
                    }
                </div>
            </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    readingTime: PropTypes.number.isRequired,
    bookmarks: PropTypes.string.isRequired
}

export default Bookmarks;