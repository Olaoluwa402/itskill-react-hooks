import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen />} />
    </Routes>
  )
}

export default Router