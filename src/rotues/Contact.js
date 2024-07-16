import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/contact_img.jpg"

function Contact() {
    return (
        <>      
            <Navbar />
            <Hero
                cName="hero"
                heroImg={ContactImg}
                title="Mobile Detailing Experts"
                text="We bring the shine to you!"
                buttonText="Detail Plan"
                url="/"
                btnClass="show"
            />
        </>
    );
}

export default Contact;
