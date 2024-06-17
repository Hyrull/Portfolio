import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import  { createRoot } from 'react-dom/client'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Home from './pages/Home/HomeTemp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
