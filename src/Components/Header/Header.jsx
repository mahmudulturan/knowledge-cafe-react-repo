import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <header className='flex justify-between items-center mt-8 mb-16 border-b-2 pb-5'>
                <h1 className=' text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </header>
        </div>
    );
};

export default Header;