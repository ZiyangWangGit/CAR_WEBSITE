import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactImg from "../assets/contact_img.jpg";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Show confirmation message
        setIsSubmitted(true);

        // Reset form (optional)
        e.target.reset();
    };

    return (
        <>      
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ContactImg}
                title="Contact Information"
                btnClass="hide"
            />
            <div className="container">
                <main className="row">
                    <section className="col left">
                        <div className="contactTitle">
                            <h2>Connect With Us</h2>
                            <p>We would love to respond to your queries and help you. Feel free to get in touch with us.</p>
                        </div>
                        <div className="contactInfo">
                            <div className="iconGroup">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="details">
                                    <span>Phone</span>
                                    <span>+647-877-3699</span>
                                </div>
                            </div>
                            <div className="iconGroup">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="details">
                                    <span>Email</span>
                                    <span>ziyang199701@gmail.com</span>
                                </div>
                            </div>
                            <div className="iconGroup">
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="details">
                                    <span>Location</span>
                                    <span>Markham,Ontario</span>
                                </div>
                            </div>
                        </div>
                        <div className="socialMedia">
                            <Link to ="https://www.facebook.com/groups/canadiandetailing/">
                                <i className="fa-brands fa-facebook-square"></i>
                            </Link>
                            <Link to="https://www.instagram.com/explore/tags/cardetailing/?hl=en">
                                <i className="fa-brands fa-instagram-square"></i>
                            </Link>
                        </div>
                    </section>
                    <section className="col right">
                        <form className="messageForm" onSubmit={handleSubmit}>
                            <div className="inputGroup halfWidth">
                                <input type="text" name="name" required />
                                <label>Your Name</label>
                            </div>
                            <div className="inputGroup halfWidth">
                                <input type="email" name="email" required />
                                <label>Email</label>
                            </div>
                            <div className="inputGroup fullWidth">
                                <input type="text" name="phone" required />
                                <label>Phone Number</label>
                            </div>
                            <div className="inputGroup fullWidth">
                                <textarea name="message" rows="5" placeholder="Please provide details about your vehicle, specific services you're interested in, or any special requests you may have for your mobile detailing appointment." required></textarea>
                            </div>


                            <div className="inputGroup fullWidth">
                                <button type="submit" className="button-show">Send Message</button>
                            </div>

                            {isSubmitted && <p className="confirmation-message">Thank you for your message! We will get back to you shortly.</p>}
                        </form>
                    </section>
                </main>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
