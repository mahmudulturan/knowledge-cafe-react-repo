import PropTypes from 'prop-types';

const Bookmarks = ({readingTime}) => {
    return (
        <div className="w-1/3">
            <div className="bg-[#6047EC1A] py-5 px-12 rounded-lg border-2 border-solid border-[#6047EC]">
                <h4 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {readingTime} min</h4>
            </div>
            <div className="px-7 py-7 bg-[#1111110D] rounded-lg">
                <h4 className="text-2xl font-bold">Bookmarked Blogs : 8</h4>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;