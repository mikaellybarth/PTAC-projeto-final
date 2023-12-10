import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style.css';

export default function Cadastro() {
   const listaVideoLocalStorage = JSON.parse( localStorage.getItem ("ListaVideo")) || [];
   const [nomeDorama, setNomeDorama ] = useState("");
   const [linkDorama, setLinkDorama ] = useState("");
   const [quantTemporadaDorama, setQuantTemporadaDorama ] = useState("");
   const [generoDorama, setGeneroDorama ] = useState("");
   const [autora, setAutora ] = useState("");
   const [quantEpDorama, setQuantEpDorama ] = useState("");
   const [listaVideo, setListaVideo ] = useState(listaVideoLocalStorage );
   const [id,setId] = useState(listaVideoLocalStorage[listaVideoLocalStorage.length - 1]?.id + 1 || 1);

   useEffect (() => { localStorage.setItem("ListaVideo", JSON.stringify(listaVideo))}, [listaVideo]);
 

   //const navigate = useNavigate();
 

    const salvar =(e) =>{
        e.preventDefault();
        setListaVideo([...listaVideo, {
            nomeDorama: nomeDorama, linkDorama: linkDorama, quantTemporadaDorama:quantTemporadaDorama, generoDorama: generoDorama, autora:autora, quantEpDorama:quantEpDorama,
                id: id
        }]);
        setId(id + 1);
        setNomeDorama("");
        setLinkDorama("");
        setQuantTemporadaDorama("");
        setGeneroDorama("");
        setAutora("");
        setQuantEpDorama("");
       // navigate("/")
        console.log(nomeDorama)
    };


    

    return (
        <div class = "center">
            <Link to="/">home</Link>
            <h1 class = "titulo">Videos Drama:</h1>    
            <form onSubmit={salvar}>
           
            <p class = "nome">Nome do Dorama:</p>
            <input value={nomeDorama} type="text"
            onChange={(e)=>{ setNomeDorama(e.target.value)}}/>
            
           <p class = "nome">Link do Dorama:</p>
           <input value={linkDorama} type="text"
            onChange={(e)=>{ setLinkDorama(e.target.value)}}/>
           
           <p class= "nome">Quant/Temporada do Dorama:</p>
           <input value={quantTemporadaDorama} type="number"
            onChange={(e)=>{ setQuantTemporadaDorama(e.target.value)}}/>

           <p class = "nome"> Genero do Dorama:</p>
           <input value={generoDorama} type="text"
            onChange={(e)=>{ setGeneroDorama(e.target.value)}}/>

           <p class = "nome"> Autora:</p>
           <input value={autora} type="text"
            onChange={(e)=>{ setAutora(e.target.value)}}/>

           <p class = "nome"> Quant/Ep do Dorama:</p>
           <input value={quantEpDorama} type="text"
            onChange={(e)=>{ setQuantEpDorama(e.target.value)}}/>

           
            <button class = "button">ADD</button>   
            </form>   
        </div>
        
    );
}