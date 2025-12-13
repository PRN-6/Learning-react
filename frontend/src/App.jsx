import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App