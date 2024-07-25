import "./Detail.css";
import shampooImg from "../assets/shampoo_img.png";
import waxImg from "../assets/wax_img.jpg";
import ceraImg from "../assets/cera_img.jpg";

const Detail = () => {
    return (
        <div className="detail">
            <h1>Popular Service</h1>
            <p>We bring the shine to you!</p>
            <div className="first-service">
                <div className="service-text">
                    <h2>Interior Shampoo Cleaning</h2>
                    <p>Our Shampoo Interior and Upholstery Cleaning service is designed to breathe new life 
                        into your vehicle's interior. Using top-of-the-line products and techniques, we 
                        thoroughly clean and rejuvenate your seats, carpets, and upholstery. Our service removes 
                        dirt, stains, and odors, leaving your interior looking and feeling fresh. Perfect for a deep 
                        clean or regular maintenance, our professional team ensures every inch of your vehicle is pampered and 
                        protected. Experience the difference with a pristine interior that reflects the care you put into your ride.</p>
                </div>
                <div className="image">
                    <img alt="Interior Cleaning" src={shampooImg} className="shampooImage"/>        
                </div>
            </div>
            <hr />
            <div className="second-service">
                <div className="service-text">
                    <h2>Exterior Wax and Shine</h2>
                    <p>Our Exterior Wax and Shine service is tailored to enhance and protect your vehicle's exterior. 
                        Utilizing high-quality wax and advanced techniques, we provide a deep, lasting shine that highlights 
                        the beauty of your car's paintwork. This service not only improves the appearance but also adds a layer 
                        of protection against environmental elements. Ideal for maintaining a showroom finish or preparing for a 
                        special occasion, our expert team ensures your vehicle stands out with a brilliant, polished look. Discover 
                        the ultimate in exterior care and enjoy a ride that gleams with pride.</p> 
                </div>
                <div className="image">
                    <img alt="Waxing" src={waxImg} className="shampooImage"/> 
                </div>
            </div>
            <hr />

            <div className="third-service">
                <div className="service-text">
                    <h2>Ceramic Coating</h2>
                    <p>Our Ceramic Coating service provides a high-quality protective layer for your vehicle's paint. This advanced 
                        coating enhances your vehicle's appearance by providing a glossy, hydrophobic surface that repels water, dirt, 
                        and other contaminants. The ceramic coating offers long-lasting protection against environmental elements and 
                        UV rays, ensuring your car maintains its showroom shine and luster for an extended period. Ideal for those 
                        seeking a premium protective solution, our ceramic coating ensures your vehicle stays looking new with minimal 
                        maintenance.</p>
                </div>
                <div className="image">
                    <img alt="Ceramic Coating" src={ceraImg} className="shampooImage"/> 
                </div>
            </div>
        </div>
    );
}

export default Detail;
