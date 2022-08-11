import { useState } from 'react';
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import Work from './Work'

function Home() {

    const [navTooogle, setNavToogle] = useState(false);

    const ToogleHandler = () => {
        setNavToogle(!navTooogle)
    }

    return (
        <>
            <Nav toogle={ToogleHandler} navTooogle={navTooogle} />
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