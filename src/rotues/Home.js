import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/home_img.webp"
import Detail from "../components/Detail";

function Home() {
    return (
        <>      
            <Navbar />
            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Mobile Detailing Experts"
                text="We bring the shine to you!"
                buttonText="Detail Plan"
                url="/"
                btnClass="show"
            />
            <Detail/>
        </>
    );
}

export default Home;
