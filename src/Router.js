import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
import PostsScreen from './screens/PostsScreen'


function Router() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
      </nav>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/posts' element={<PostsScreen />} />
          <Route path='/posts/:id' element={<PostScreen />} />
        </Routes>
    </div>
    
  )
}

export default Router