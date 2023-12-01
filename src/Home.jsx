
import {Link} from "react-router-dom";
import React from "react";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";


export default function Home(){
  const listaVideoLocalStorage = JSON.parse( localStorage.getItem ("listaVideo")) || [];
    return(
      <div>
      <Header/>
       <Card listaVideos = {listaVideoLocalStorage} />
      </div>
     );
}