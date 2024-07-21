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
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
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
                    <a href="/">Support</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Term of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
