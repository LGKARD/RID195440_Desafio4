import Button from "../button/button";
import { Link } from "react-router-dom";
//STYLES    
import "./hero.css";


function Hero() {
  return (
    <div className="hero d-flex al-center">
      <div className="hero-text">
        <h1>Luiz Guilherme Freitas Neto</h1>
        <p>Desenvolvedor apaixonado por tecnologia, com experiência em React, HTML, CSS e JavaScript. Busco constantemente aprender, criar soluções eficientes e evoluir na área de desenvolvimento web.</p>
        <Link className="linkButtonHero" to="/about"><Button buttonStyle="primary">Saiba mais</Button></Link>
        
      </div>
    </div>
  );
}

export default Hero;
