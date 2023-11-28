import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Detalhe from './Detalhe'
import Cadastro from '.Cadastro/Cadastro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path='/Detalhe' element={<detalhe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
