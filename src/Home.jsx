import {Link} from "react-router-dom";
import Header from "./Componentes/Header";
import Card from "./Componentes/Header";
import Menu from "./Componentes/Header";


export default function Home(){
    return(
       <div>
      <Header/>
      <Card/>
      <Menu/>
       </div>
     );
}