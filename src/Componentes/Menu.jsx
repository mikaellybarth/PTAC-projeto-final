import { Link } from "react-router-dom"
import '../style.css'

function Cards ({listaVideos}) {

    return(

       listaVideos.map((video) =>
        <div className = "card">
           <iframe
           width= "853"
           height= "480"
           onScroll={
            'https://www.youtube.com/embed/' + video.url.slice(17)}
            frameborder ="0"
            allow = "accelerometer; autoplay; clipboard-write;">
            </iframe>
           
        </div>
        
    )
    )
}