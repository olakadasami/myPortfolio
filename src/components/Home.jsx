import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import Work from './Work'

function Home() {
    return (
        <>
            <Nav />
            <Header />
            <About />
            <Experience />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}

export default Home