import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='w-3/4 mx-auto'>
        <Header></Header>
        <div className='flex justify-center'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>

      </div>
      
     
    </>
  )
}

export default App
