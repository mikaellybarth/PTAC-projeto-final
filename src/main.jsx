import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Card from './Componentes/Card';
import Detalhe from './Detalhe'
import Cadastro from './Cadastro/Cadastro'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path='/Detalhe/:id' element={<Detalhe />}></Route>
        <Route path='/Componentes' element={<Card />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
