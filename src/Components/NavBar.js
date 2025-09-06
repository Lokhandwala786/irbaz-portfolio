import React from "react";

function NavBar(props) {
    return (
        <div className="navbar">
            <div className="nav-brand">
                <span className="brand-text">Irbaz</span>
                <span className="brand-dot">.</span>
            </div>
            <div className="navelements">
                <span
                    onClick={() => {
                        props.scrollFunction("home");
                    }}
                >
                    Home
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("skills");
                    }}
                >
                    Skills
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("certificate");
                    }}
                >
                    Certificates
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("projects");
                    }}
                >
                    Projects
                </span>
                <span
                    onClick={() => {
                        props.scrollFunction("contact");
                    }}
                >
                    Contact
                </span>
            </div>
        </div>
    );
}

export default NavBar;