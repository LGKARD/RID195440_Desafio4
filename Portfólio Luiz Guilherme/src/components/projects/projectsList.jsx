import Button from "../button/button";
import { Link } from "react-router-dom";
//STYLES    
import "./projectsList.css";


function ProjectsList() {
  return (
    <div className="projects-section">
        <div className="projects-hero">
            <h1>Projetos</h1>
        </div>
        <div className="projects-grid">
            <div className="project-card d-flex al-center jc-center fd-column">
                <div>imagem</div>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <a href=""><Button buttonStyle="primary">Clique aqui</Button></a>
            </div>
            <div className="project-card d-flex al-center jc-center fd-column">
                <div>imagem</div>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <a href=""><Button buttonStyle="primary">Clique aqui</Button></a>
            </div>
            <div className="project-card d-flex al-center jc-center fd-column">
                <div>imagem</div>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <a href=""><Button buttonStyle="primary">Clique aqui</Button></a>
            </div>
            <div className="project-card d-flex al-center jc-center fd-column">
                <div>imagem</div>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <a href=""><Button buttonStyle="primary">Clique aqui</Button></a>
            </div>

        </div>
      
    </div>
  );
}

export default ProjectsList;