import { Link } from "react-router-dom";

//ASSETS
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";

//STYLES    
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="d-flex al-center jc-between">
          <nav>
            <ul className="d-flex al-center">
              <li>
                <Link to="/projects">Projetos</Link>
              </li>
              <li>
                <Link to="/tecnologies">Tecnologias</Link>
              </li>
              <li>
                <Link to="/about">Sobre mim</Link>
              </li>
            </ul>
          </nav>
          <div className="d-flex al-center jc-end">
          <a href="https://github.com/LGKARD" target="_blank" rel="noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-guilherme-freitas-neto-3bb246177/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
