import Button from "../button/button";
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
          <div className="padding-border">
            <div className="thumb">
              <a target="_blank" href="https://dashboard-de-vendas.vercel.app/">
                <img src="../../public/dashboard-image.png" alt="" />
              </a>
            </div>
            <h3>Dashboard</h3>
            <p>
              Dashboard de vendas com gráficos, metas, ranking de vendedores e
              gestão de leads para acompanhamento de desempenho mensal.
            </p>
            <a
              target="_blank"
              href="https://github.com/LGKARD/Dashboard-de-vendas"
            >
              <Button buttonStyle="primary">Clique aqui</Button>
            </a>
          </div>
        </div>
        <div className="project-card d-flex al-center jc-center fd-column">
          <div className="padding-border">
            <div className="thumb">
              <a
                target="_blank"
                href="https://react-e-typescript-parndt0zd-lgkards-projects.vercel.app/"
              >
                <img src="../../public/arquitetura-image.png" alt="" />
              </a>
            </div>
            <h3>Arquitetura</h3>
            <p>
              Página responsiva de arquitetura e engenharia dedicada a criar
              espaços únicos e personalizados para realizar o sonho da casa
              ideal.
            </p>
            <a
              target="_blank"
              href="https://github.com/LGKARD/Pagina-de-arquitetura-e-engenharia"
            >
              <Button buttonStyle="primary">Clique aqui</Button>
            </a>
          </div>
        </div>
        <div className="project-card d-flex al-center jc-center fd-column">
          <div className="padding-border">
            <div className="thumb">
              <a target="_blank" href="https://rid195440desafio2.netlify.app/">
                <img src="../../public/devnews-image.png" alt="" />
              </a>
            </div>
            <h3>Dev News</h3>
            <p>
              Projeto de blog moderno para desenvolvedores, com posts populares,
              categorias e artigos recentes sobre tecnologia e produtividade.
            </p>
            <a
              target="_blank"
              href="https://github.com/LGKARD/RID195440_Desafio2"
            >
              <Button buttonStyle="primary">Clique aqui</Button>
            </a>
          </div>
        </div>
        <div className="project-card d-flex al-center jc-center fd-column">
          <div className="padding-border">
            <div className="thumb">
              <a
                target="_blank"
                href="https://cardapiohamburgueria.netlify.app/"
              >
                <img src="../../public/cardapio-image.png" alt="" />
              </a>
            </div>
            <h3>Cardápio</h3>
            <p>
              Cardápio interativo de hamburgueria utilizando HTML, TailwindCSS e
              JavaScript, com design responsivo e funcionalidades dinâmicas.
            </p>
            <a
              target="_blank"
              href="https://github.com/LGKARD/Cardapio-Hamburgueria?tab=readme-ov-file"
            >
              <Button buttonStyle="primary">Clique aqui</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
