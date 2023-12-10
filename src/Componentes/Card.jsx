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
            'https://youtube.com/embed/' + cadastro.linkDorama.slice(17)}>
            </iframe>
            <Link to={`/Detalhe/${cadastro.id}`}><p>{cadastro.nomeDorama}</p></Link>
            <p>{cadastro.quantTemporadaDorama}</p>
            <p>{cadastro.autora}</p>
            <p>{cadastro.quantEpDorama}</p>
            <p>{cadastro.generoDorama}</p>
         
           
        </div>
        
    )
    );
}