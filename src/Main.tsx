import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import  { createRoot } from 'react-dom/client'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)