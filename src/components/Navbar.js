import { Component } from "react";
import "./Navbar.css";
import {MenuItems} from "./MenuItems"
import { Link } from "react-scroll";

class Navbar extends Component{
    render(){
        return(
            <nav className = "NavbarItems">
                <h1 className="navbar-logo">8eight Detailing</h1>
                <div className ="menu-icons">
                    <i className="fas fa-bars"></i>
                    
                </div>

                <ul className="nav-menu">
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                            <a className={item.cName}href="">
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                        )
                    })}
                   <button>Sign up</button>
                </ul>
            </nav>
        )
    }

}

export default Navbar