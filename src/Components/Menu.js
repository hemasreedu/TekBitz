import React from "react";
import { Link } from "react-router-dom";
//import 'font-awesome/css/font-awesome.min.css';

export default function Menu() {
    const togglelinks = () => {
        const links = document.querySelector(".links");
        links.classList.toggle("show-links");
    }
    const hidelinks = () => {
        const links = document.querySelector(".links");
        if (links.classList.contains("show-links")) {
            links.classList.remove("show-links")
        }
    }
    return (
        <>
            <header>
                <a href="#" className="logo">CRACKTEK</a>
                
                <nav className="navbar">
                    <ul className="links">
                        <li className="data" onClick={hidelinks}>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#">Topics <i className='fas fa-angle-down'></i></a>
                            <ul>
                                <li className="data" onClick={hidelinks}>
                                    <Link to="/Javascriptquestions">Javascript interview questions</Link>
                                </li>
                                <li className="data" onClick={hidelinks}>
                                    <Link to="/Reactquestions">React interview questions</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
                <div className='icon'>
                    <i className='fa fa-home' onClick={togglelinks}></i>
                </div>
            </header>
            </>
    )
}
