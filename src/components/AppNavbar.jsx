import { useState } from "react";

const AppNavbar = () => {
    const [activeLink, setActiveLink] = useState("home-section");

    const handleClick = (section) => {
        setActiveLink(section);
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
            id="ftco-navbar"
        >
            <div className="container">
                <a className="navbar-brand" href="/">
                    Rahul Prajapati
                </a>
                <button
                    className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item" onClick={() => handleClick("home-section")}>
                            <a
                                className={`nav-link ${activeLink === "home-section" ? "active" : ""}`}
                                href="#home-section"
                            >
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleClick("about-section")}>
                            <a
                                className={`nav-link ${activeLink === "about-section" ? "active" : ""}`}
                                href="#about-section"
                            >
                                <span>About</span>
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleClick("resume-section")}>
                            <a
                                className={`nav-link ${activeLink === "resume-section" ? "active" : ""}`}
                                href="#resume-section"
                            >
                                <span>Resume</span>
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleClick("project-section")}>
                            <a
                                className={`nav-link ${activeLink === "project-section" ? "active" : ""}`}
                                href="#project-section"
                            >
                                <span>Projects</span>
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleClick("contact-section")}>
                            <a
                                className={`nav-link ${activeLink === "contact-section" ? "active" : ""}`}
                                href="#contact-section"
                            >
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AppNavbar;
