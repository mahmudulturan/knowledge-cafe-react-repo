import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [readingTime, setReadingTime] = useState(0)
  const [bookmarks, setBookmarks] = useState([])
  const [clicked, setClicked] = useState(false)

  const handlerBookmark = (title) => {
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
    setClicked(!clicked)
  }

  const handlerMarkAsRead = (time, title) =>{
    setReadingTime(readingTime + time)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark !== title)
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <div className='md:w-3/4 mx-auto px-1'>
        <Header></Header>
        <div className='md:flex gap-6 justify-center'>
          <Blogs handlerMarkAsRead={handlerMarkAsRead} clicked={clicked} handlerBookmark={handlerBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>

      </div>
      
     
    </>
  )
}

export default App
