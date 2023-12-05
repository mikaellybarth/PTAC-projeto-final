import { Link } from "react-router-dom";
import '../style.css'

export default function Card ({listaVideo}) {
 
    return(

       listaVideo.map((cadastro) =>
       
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
        
    )
    )
}