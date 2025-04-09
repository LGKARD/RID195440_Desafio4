import { Link } from "react-router-dom";
import { useState } from "react";

//ASSETS
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/Linkedin.svg";

//STYLES
import "./header.css";

//COMPONENT
import Button from "../button/button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <div className="container">
        <div className="d-flex al-center jc-between">
          <div className="mobile-menu">
            <button className="button primary" onClick={toggleMenu}>Menu</button>
          </div>
          <nav className={`${isOpen ? "open" : ""} `}>
            <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>X</Button>
            <ul className="d-flex al-center">
              <li>
                <Link to="/">Home</Link>
              </li>
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
            <a
              href="https://github.com/LGKARD"
              target="_blank"
              rel="noreferrer"
            >
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
