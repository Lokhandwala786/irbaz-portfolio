import React, { useState, useEffect } from "react";

const NavMobile = (props) => {
    const [NavStatus, setNavStatus] = useState(false);

    const GoToSpecific = (link) => {
        setNavStatus(!NavStatus);
        const element = document.getElementById(link);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const changeNavStatus = () => {
        setNavStatus(!NavStatus);
    };

    useEffect(() => {}, [NavStatus]);

    return (
        <div className="navcontainer">
            <div className="navmobile">
                <div className="nav-brand-mobile">
                    <span className="brand-text">Irbaz</span>
                    <span className="brand-dot">.</span>
                </div>
                <div
                    className={`navbtn ${NavStatus ? "active" : ""}`}
                    onClick={changeNavStatus}
                >
                    <div className="upperline"></div>
                    <div className="lowerline"></div>
                </div>
            </div>

            {NavStatus && (
                <div className="NavMenu">
                    <button
                        className="navopts"
                        onClick={() => {
                            GoToSpecific("home");
                        }}
                    >
                        Home
                    </button>
                    <button
                        className="navopts"
                        onClick={() => {
                            GoToSpecific("skills");
                        }}
                    >
                        Skills
                    </button>
                    <button
                        className="navopts"
                        onClick={() => {
                            GoToSpecific("certificate");
                        }}
                    >
                        Certificates
                    </button>
                    <button
                        className="navopts"
                        onClick={() => {
                            GoToSpecific("projects");
                        }}
                    >
                        Projects
                    </button>
                    <button
                        className="navopts"
                        onClick={() => {
                            GoToSpecific("contact");
                        }}
                    >
                        Contact
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavMobile;