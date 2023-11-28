import {Link} from "react-router-dom";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";
import Menu from "./Componentes/Menu";


export default function Home(){
    return(
       <div>
      <Header/>
      <Card/>
      <Menu/>
       </div>
     );
}