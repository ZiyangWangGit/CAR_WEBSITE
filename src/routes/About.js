import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutImg from "../assets/about_img.jpg"
import "./About.css"

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
            <div className="about-container">
                <h1>About Us</h1><br/>
                <section className="about-intro">
                    <h2>Welcome to 8ight Mobile Detailing</h2>
                    <p>
                        At 8ight Mobile Detailing, we’re dedicated to bringing the shine to you! We understand that your time is valuable, which is why we provide top-notch detailing services right at your doorstep. Our mission is to deliver exceptional quality and convenience with every service we offer.
                    </p>
                </section>

                <section className="about-story">
                    <h2>Our Story</h2>
                    <p>
                        Founded on a passion for cars and a commitment to excellence, 8ight Mobile Detailing was created to offer a premium detailing experience that fits seamlessly into your busy lifestyle. We believe that every vehicle deserves to look its best, and our team of skilled professionals is here to make that happen without you having to leave the comfort of your home.
                    </p>
                </section>

                <section className="about-services">
                    <h2>What We Offer</h2>
                    <ul>
                        <li><strong>Exterior Detailing:</strong> From hand washing to waxing, we use high-quality products to make your vehicle's exterior shine.</li>
                        <li><strong>Interior Detailing:</strong> Our thorough interior cleaning ensures every nook and cranny is spotless and refreshed.</li>
                        <li><strong>Specialized Treatments:</strong> We offer additional treatments like paint protection, ceramic coating, and headlight restoration to keep your vehicle in top condition.</li>
                    </ul>
                </section>

                <section className="about-commitment">
                    <h2>Our Commitment to Quality</h2>
                    <p>
                        At 8ight Mobile Detailing, we pride ourselves on our attention to detail and commitment to customer satisfaction. Our team uses only the best products and equipment to ensure your vehicle receives the highest level of care. We’re dedicated to providing reliable, efficient, and professional service every time.
                    </p>
                </section>

                <section className="about-why-choose">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>Convenience:</strong> We come to you, saving you time and hassle.</li>
                        <li><strong>Expertise:</strong> Our skilled technicians are trained to handle all types of vehicles with care and precision.</li>
                        <li><strong>Quality:</strong> We use premium products and techniques to deliver superior results.</li>
                        <li><strong>Customer Focused:</strong> Your satisfaction is our top priority. We listen to your needs and tailor our services to meet them.</li>
                    </ul>
                </section>

                <section className="about-contact">
                    <h2>Get in Touch</h2>
                    <p>
                        Ready to experience the ultimate in mobile detailing? Contact us today to schedule your appointment or to learn more about our services. Let us bring the shine to you!
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default About;
