import { useState } from 'react'
import Docente from './views/pages/Docente';
import Home from './views/pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="Programas" element={<Home />} />
          <Route path="Docente" element={<Docente />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App