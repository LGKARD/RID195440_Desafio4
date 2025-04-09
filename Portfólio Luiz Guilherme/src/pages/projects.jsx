import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import ProjectsList from "../components/projects/projectsList"



function Projects() {
    return (
        <>
            <Header />
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects