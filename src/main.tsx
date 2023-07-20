import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Login from './pages/Login.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp.tsx'
import ShowBoard from './pages/ShowBoard.tsx'
import CreateBoard from './pages/CreateBoard.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/board" element={<ShowBoard/>}></Route>
        <Route path="/create" element={<CreateBoard/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
