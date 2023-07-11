import { useState,React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Docente from './views/Docente.jsx'
import Login from './views/Login.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Programas" element={<Home />} />
          <Route path="Docente" element={<Docente />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
