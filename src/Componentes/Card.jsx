import { Link } from "react-router-dom"
import '../style.css'

export default function Card ({listaVideos}) {

    return(

       listaVideos.map((cadastro) =>
        <div className = "card">
           <iframe
           width= "853"
           height= "480"
           onScroll={
            'https://www.youtube.com/embed/' + cadastro.url.slice(17)}
            frameborder ="0"
            allow = "accelerometer; autoplay; clipboard-write;">
            </iframe>
           
        </div>
        
    )
    )
}