import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Button from "../components/button/button"
import Hero from "../components/hero/hero"

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
            </div>
            
            <Footer />
        </>
    )
}

export default Home