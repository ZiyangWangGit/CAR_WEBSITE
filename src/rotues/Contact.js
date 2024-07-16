import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/contact_img.jpg"

function Contact() {
    return (
        <>      
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ContactImg}
                title="Contact Infomation"
                btnClass="hide"
            />
        </>
    );
}

export default Contact;
