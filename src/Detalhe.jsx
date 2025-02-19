import { useParams } from "react-router-dom"


export default function detalhe (){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("ListaVideo"));
    
   const cadastro = lista.filter((objeto)=>{
        if(objeto.id == id){
                  return objeto;
        }
        return null;
    })

  

    return(
        cadastro.map((cadastro) =>
        <div>
          <div className = "card" key={cadastro.id}>
           <iframe
        width="853"
        height="480"
           src={
            'https://youtube.com/embed/' + cadastro.linkDorama.slice(17)}
   
            >
              
            </iframe>
            <p>{cadastro.nomeDorama}</p>
            <p>{cadastro.quantTemporadaDorama}</p>
            <p>{cadastro.autora}</p>
            <p>{cadastro.quantEpDorama}</p>
            <p>{cadastro.generoDorama}</p>
         
           
        </div>
        </div>
    ))
} 