import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Login from './Login.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Signup.tsx'
import ShowBoard from './ShowBoard.tsx'
import CreateBoard from './CreateBoard.tsx'

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
