import React from "react";
import "./tech.css";

const technologies = [
  {
    name: "React",
    level: "Avançado",
    description: "SPAs, componentes reutilizáveis e APIs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    level: "Intermediário",
    description: "APIs REST, Express e MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "HTML5",
    level: "Avançado",
    description: "Semântica e acessibilidade",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    level: "Avançado",
    description: "Layouts responsivos e animações",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: "Avançado",
    description: "ES6+, DOM, eventos e fetch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    level: "Intermediário",
    description: "Controle de versão e branches",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "PostgreSQL",
    level: "Intermediário",
    description: "Consultas SQL e modelagem",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Typescript",
    level: "Básico",
    description: "Tipagem",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    level: "Intermediário",
    description: "Análise de dados e automações",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

function Tech() {
  return (
    <div className="tech-grid-container">
      <h2 className="title">Tecnologias que domino</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <h3>{tech.name}</h3>
            <p className="level">{tech.level}</p>
            <p className="description">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;