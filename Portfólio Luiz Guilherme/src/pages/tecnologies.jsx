import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Tech from "../components/Tech/tech"

function Technologies() {
    return (
        <>
            <Header />
            <div className="container">
                <Tech/>
            </div>
            <Footer />
        </>
    )
}

export default Technologies