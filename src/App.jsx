import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import { addItemToLS, addItemToLSNum, getDataFromLS, getDataFromLSNum, removeItemFromLS } from './Utilities/localStorage'

function App() {
  const [readingTime, setReadingTime] = useState(0)
  const [bookmarks, setBookmarks] = useState([])
  const [clicked, setClicked] = useState(false)

  const handlerBookmark = (title) => {
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
    setClicked(!clicked)
    addItemToLS(title)
  }

  const handlerMarkAsRead = (time, title) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark !== title)
    setBookmarks(remainingBookmarks);
    removeItemFromLS(title)
    addItemToLSNum(time)
  }

  useEffect(()=>{
    const lsData = getDataFromLS()
    setBookmarks(lsData)
  },[])

  useEffect(()=>{
    const lsData = getDataFromLSNum();
    setReadingTime(lsData);
  },[])
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
