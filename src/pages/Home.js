import Navbar from "../components/Navbar"
import Introduction from "../components/Introdution";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return <>
        <Navbar />
        <Introduction/>
        <About/>
        <Reviews/>
        <Services/>
        <Contact/>
        <Footer/>
    </>
}
export default Home;