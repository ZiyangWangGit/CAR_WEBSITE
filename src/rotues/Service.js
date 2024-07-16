import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/service_img.jpg"

function Service() {
    return (
        <>      
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ServiceImg}
                title="Mobile Detailing Experts"
                text="We bring the shine to you!"
                buttonText="Detail Plan"
                url="/"
                btnClass="show"
            />
        </>
    );
}

export default Service;
