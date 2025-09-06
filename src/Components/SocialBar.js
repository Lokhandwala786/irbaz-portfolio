import React from "react";
import Gitlogo from "../Images/github.png";
import Linkedin from "../Images/linkedin.png";

const GoToLinkedin = () => {
    window.location.href =
        "https://www.linkedin.com/in/irbaz-lokhandwala/";
};

const GoToGit = () => {
    window.location.href = "https://github.com/irbaz786";
};


function SocialBar() {
    return (
        <div className="socbar">
            <img
                src={Gitlogo}
                className="soclogo"
                alt="Github"
                onClick={GoToGit}
            />
            <img
                src={Linkedin}
                className="soclogo"
                alt="Linkedin"
                onClick={GoToLinkedin}
            />
            <div className="decoratebar"> </div>
        </div>
    );
}

export default SocialBar;
