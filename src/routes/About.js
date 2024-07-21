import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutImg from "../assets/about_img.jpg"

function About() {
    return (
        <>      
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About The Company"
                btnClass="hide"
            />
            <Footer/>
        </>
    );
}

export default About;
