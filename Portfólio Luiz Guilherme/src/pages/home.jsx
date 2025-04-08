import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Button from "../components/button/button"
import Hero from "../components/hero/hero"
import Projects from "../components/projects/projectsList"
import Timeline from "../components/timeline/timeline"

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
                <Projects />
                <Timeline />
            </div>
            <Footer />
        </>
    )
}

export default Home