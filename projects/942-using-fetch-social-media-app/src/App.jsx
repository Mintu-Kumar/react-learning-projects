import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import CreatePost from './components/createpost'

import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'

function App() {
 const [selectedTab, setSelectedTab]  = useState("Home");
  return (
    <>
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className='content'>
          <Header/>
          {selectedTab === 'Home' ? <PostList/> :<CreatePost/>}
          <Footer/>
        </div>
      </div>
   </PostListProvider>
    </>
  )
}

export default App
