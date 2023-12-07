import { useParams } from "react-router-dom"


export default function detalhe (){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    
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
            <p>{cadastro.NomeDorama}</p>
            <p>{cadastro.QuantTemporadaDorama}</p>
            <p>{cadastro.Autora}</p>
            <p>{cadastro.QuantEpDorama}</p>
         
           
        </div>
        </div>
    ))
} 