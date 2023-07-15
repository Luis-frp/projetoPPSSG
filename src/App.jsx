import Docente from './views/pages/Docente';
import Home from './views/pages/Home';
import Programa from './views/pages/Programa'
import Producao from './views/pages/Producao'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Programas" element={<Programa />} />
          <Route path="Docente" element={<Docente />} />
          <Route path="Producao" element={<Producao />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App