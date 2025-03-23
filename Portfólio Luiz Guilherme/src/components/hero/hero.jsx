import Button from "../button/button";
import { Link } from "react-router-dom";
//STYLES    
import "./hero.css";


function Hero() {
  return (
    <div className="hero d-flex al-center">
      <div className="hero-text">
        <h1>Luiz Guilherme Freitas Neto</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quam voluptates delectus maiores at, doloremque vel totam, in nihil culpa velit eum minus omnis consequuntur laudantium, eius et numquam voluptatibus.</p>
        <Link className="linkButtonHero" to="/about"><Button buttonStyle="primary">Saiba mais</Button></Link>
        
      </div>
    </div>
  );
}

export default Hero;
