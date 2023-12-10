import React from "react";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";

export default function Destaque(){
    const destaque = JSON.parse( localStorage.getItem ("ListaVideo")) || [];
    const montrarOsDestaque = destaque.slice(-2)
    console.log(montrarOsDestaque)
    return(
      <div>
        
      <Header/>
       <Card listaVideo = {montrarOsDestaque} />
      </div>
     );
}