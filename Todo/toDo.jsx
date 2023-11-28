import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style.css';

export default function ToDo() {
   const listaVideoLocalStorage = JSON.parse( localStorage.getItem ("listaVideo")) || [];
   const [produto, setProduto ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [img, setImg ] = useState("");
   const [listaVideo, setListaVideo ] = useState(listaVideoLocalStorage );
   const [id,setId] = useState(listaVideoLocalStorage[listaVideoLocalStorage.length - 1]?.id + 1 || 1);

   useEffect (() => { localStorage.setItem("ListaVideo", JSON.stringify(listaVideo))}, [listaVideo]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...listaVideo, {
                produto: produto, marca:marca, preco:preco, img: img,
                id: id
        }]);
        setId(id + 1);
        setProduto("");
        setMarca("");
        setPreco("");
        setImg("");
    };

    const excluir = (id) => {
    const excluirListaVideo = [];
    listaVideo.map ((listaVideo) =>{
    if(listaVideo.id !==id){
        excluirListaVideo.push(listaVideo);
    }
    });
    setListaVideo(excluirListaVideo)
     
    }


    return (
        <div class = "center">
            <Link to="/">home</Link>
            <h1 class = "titulo">Produtos Petshop</h1>    
            <form onSubmit={salvar}>
           
            <p class = "nome">Produto:</p>
            <input value={produto} type="text"
            onChange={(e)=>{ setProduto(e.target.value)}}/>
            
           <p class = "nome">Marca do produto:</p>
           <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
           
           <p class= "nome">Valor do produto:</p>
           <input value={preco} type="number"
            onChange={(e)=>{ setPreco(e.target.value)}}/>

           <p class = "nome"> img:</p>
           <input value={img} type="text"
            onChange={(e)=>{ setImg(e.target.value)}}/>

            <button class = "button">ADD</button>   
            </form>   
               
            {listaVideo.map((objeto)=>
            <div class= "card" key = {objeto.id}>

                <Link to={`/detalhe/${objeto.id}`}>
                    <p>{objeto.produto}</p>
                </Link>
                
                <img src= {objeto.img}alt="" class = "img" />
                <p class = "name">Produto:{objeto.produto}</p>
                <p class = "name"> Marca:{objeto.marca}</p>
                <p class = "name"> R$:{objeto.preco}</p>
                <button class = "button" onClick={()=> excluir(objeto.id)}>ExcluirProduto</button>
            </div>
            )} 
        </div>
    );
}