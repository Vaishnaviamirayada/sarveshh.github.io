import React, { useState } from "react";
import "./Navbar.css";
import navbarItems from "./NavbarItems";
import { FaBars } from "react-icons/fa";
import LogoSvg from "../../assets/LogoSvg";

const Navbar = ({ toggle, onClick }) => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    const [toggled, setToggled] = React.useState(false);
    const handleClick = () => {
        setToggled((s) => !s);
    };

    return (
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className="link">
                <LogoSvg />
            </div>
            <div className="menu-items">
                {navbarItems.map((item, index) => (
                    <a className="link" to={item.link} key={index}>
                        {item.title}
                    </a>
                ))}
            </div>
            <div className="icons">
                <div
                    toggled={toggled.toString()}
                    onClick={handleClick}
                    id="darkmode"
                    className={`toggle${toggled ? " night" : ""}`}
                >
                    <div className="notch">
                        <div className="crater" />
                        <div className="crater" />
                    </div>
                    <div>
                        <div className="shape sm" />
                        <div className="shape sm" />
                        <div className="shape md" />
                        <div className="shape lg" />
                    </div>
                </div>
                <div className="mobile-menu-icon">
                    <FaBars onClick={toggle} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
