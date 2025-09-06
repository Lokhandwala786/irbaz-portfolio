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

function SocialBarMobile() {
    return (
        <div className="socialbarmobile">
            <h5>My Socials</h5>
            <div className="socialcon">
                <img src={Gitlogo} alt="Github" onClick={GoToGit} />
                <img src={Linkedin} alt="Linkedin" onClick={GoToLinkedin} />
            </div>
        </div>
    );
}

export default SocialBarMobile;
