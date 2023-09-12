import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [readingTime, setReadingTime] = useState(0)
  const [bookmarks, setBookmarks] = useState([])
  const handlerBookmark = (title) => {
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
  }

  const handlerMarkAsRead = (time) =>{
    setReadingTime(readingTime + time)
  }
  return (
    <>
      <div className='w-3/4 mx-auto'>
        <Header></Header>
        <div className='flex gap-6 justify-center'>
          <Blogs handlerMarkAsRead={handlerMarkAsRead} handlerBookmark={handlerBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>

      </div>
      
     
    </>
  )
}

export default App
