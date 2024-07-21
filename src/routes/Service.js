import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ServiceImg from "../assets/service_img.jpg"
import PriceImg from "../assets/price.png"
import"./Service.css"

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
            <div className="image-container">
                <img className="price" src={PriceImg} alt="Price Image" />
            </div>
            <Footer/>
        </>
    );
}

export default Service;
