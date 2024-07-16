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
                title="Service Details"
                btnClass="hide"
            />
        </>
    );
}

export default Service;
