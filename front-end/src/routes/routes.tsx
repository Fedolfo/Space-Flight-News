import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Articles from '../pages/Articles'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Articles />} />
    </Routes>
  )
}

export default MainRoutes
