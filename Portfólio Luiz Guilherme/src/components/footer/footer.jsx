import { Link } from "react-router-dom";

//ASSETS
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";

//STYLES
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="al-center d-flex jc-between">
          <div className="footer-contact">
            <h2>Meu Contato:</h2>
            <a
              href="https://wa.me/553498824340"
              target="_blank"
              rel="noreferrer"
            >
              <h2>(34) 9 9882-4340</h2>
            </a>
          </div>
          <div className="footer-email">
            <h2>E-mail:</h2>
            <h2>luizguilhermefreitasneto@gmail.com</h2>
          </div>
          <div className="footer-links">
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
    </footer>
  );
}

export default Footer;
