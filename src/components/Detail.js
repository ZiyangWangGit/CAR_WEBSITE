import "./Detail.css";
import shampooImg from "../assets/shampoo_img.png";


const Detail = () => {
    return (
        <div className="detail">
            <h1>Popular Service</h1>
            <p>We bring the shine to you!</p>
            <div className="first-service">
                <div className="service-text">
                    <h2>Your Vehicle's Interior with Professional Shampoo Cleaning</h2>
                    <p>Our Shampoo Interior and Upholstery Cleaning service is designed to breathe new life 
                        into your vehicle's interior. Using top-of-the-line products and techniques, we 
                        thoroughly clean and rejuvenate your seats, carpets, and upholstery. Our service removes 
                        dirt, stains, and odors, leaving your interior looking and feeling fresh. Perfect for a deep 
                        clean or regular maintenance, our professional team ensures every inch of your vehicle is pampered and 
                        protected. Experience the difference with a pristine interior that reflects the care you put into your ride.</p>
                </div>
                <div className="image">
                    <img alt="Before Cleaning" src={shampooImg} className="shampooImage"/>        
                </div>
            </div>
        </div>
    );
}

export default Detail;
