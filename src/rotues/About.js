import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/about_img.jpg"

function About() {
    return (
        <>      
            <Navbar />
            <Hero
                cName="hero"
                heroImg={AboutImg}
                title="cccccccc"
                text="carcar"
                buttonText="Detail Plan"
                url="/"
                btnClass="show"
            />
        </>
    );
}

export default About;
