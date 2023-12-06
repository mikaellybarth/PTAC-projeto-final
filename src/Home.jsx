
import {Link} from "react-router-dom";
import React from "react";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";


const listaVideo = JSON.parse( localStorage.getItem ("ListaVideo")) || [];

export default function Home(){

    return(
      <div>
        
      <Header/>
       <Card listaVideo = {listaVideo} />
      </div>
     );
}