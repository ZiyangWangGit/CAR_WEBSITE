import { Link } from "react-router-dom";
import "./Hero.css";

function Hero(props) {
    return (
        <div className={props.cName}>
            <img alt="CarImg" src={props.heroImg} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p> 
                <Link to={props.url} className={props.btnClass}>
                    {props.buttonText}
                </Link>
            </div>
        </div>
    );
}

export default Hero;
