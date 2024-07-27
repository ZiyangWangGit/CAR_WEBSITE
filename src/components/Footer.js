import { Link } from "react-router-dom";
import "./Footer.css"; // Ensure correct path to your CSS file

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>8ight Mobile Detailing</h1>
                    <p>We bring the shine to you!</p>
                </div>
                <div>
                    <Link to ="https://www.facebook.com/groups/canadiandetailing/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </Link>
                    <Link to="https://www.instagram.com/explore/tags/cardetailing/?hl=en">
                        <i className="fa-brands fa-instagram-square"></i>
                    </Link>
                    {/* <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a> */}
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Service</h4>
                    <a href="/">Changelog</a>
                    <a href="/">License</a>
                    <a href="/">Status</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <Link to="/support">Support</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div>
                    <h4>Legal</h4>
                    <Link to="/term_of_use">Term of Service</Link>
                    <Link to="/privacy_policy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
