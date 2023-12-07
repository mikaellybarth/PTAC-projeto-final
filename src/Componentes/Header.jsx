import {Link} from "react-router-dom";
export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/destaque">Destaque</a>
              <a className="nav-link" href="/cadastro">Cadastrar</a>
              <a className="nav-link" href="/detalhe">Detalhe</a>
            </div>
          </div>
        </div>
      </nav>
     );
}