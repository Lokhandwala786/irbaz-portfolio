import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SocialBar from "./Components/SocialBar";
import ResumeIcon from "./Images/resume.png";
import ContactIcon from "./Images/contact.png";
import ProgramIcon from "./Images/myava.png";
import Skills from "./Components/Skills";
import SocialMobile from "./Components/SocialBarMobile";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Certificates from "./Components/Certificates";
import NavMobile from "./Components/NavMobile";

function App() {
    const scrollToElement = (elementId) => {
        console.log("Contact Me button clicked!");
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const GoToResume = () => {
        console.log("Resume button clicked!");
        window.open(
            "https://drive.google.com/file/d/1b7I8vLwmLuo2Whbmsa_OgBcw_YRdvC0l/view?usp=sharing",
            "_blank"
        );
    };
    const [titletext, setTitleText] = useState("H");

    useEffect(() => {
        setTimeout(() => {
            setTitleText("Hi");
        }, 600);
        setTimeout(() => {
            setTitleText("Hi!");
        }, 800);
        setTimeout(() => {
            setTitleText("Hi! I");
        }, 1000);
        setTimeout(() => {
            setTitleText("Hi! I a");
        }, 1200);
        setTimeout(() => {
            setTitleText("Hi! I am");
        }, 1400);
        setTimeout(() => {
            setTitleText("Hi! I am I");
        }, 1600);
        setTimeout(() => {
            setTitleText("Hi! I am Ir");
        }, 1800);
        setTimeout(() => {
            setTitleText("Hi! I am Irr");
        }, 2000);
        setTimeout(() => {
            setTitleText("Hi! I am Irru");
        }, 2200);
        setTimeout(() => {
            setTitleText("Hi! I am Irr");
        }, 2400);
        setTimeout(() => {
            setTitleText("Hi! I am Ir");
        }, 2600);
        setTimeout(() => {
            setTitleText("Hi! I am Irb");
        }, 2800);
        setTimeout(() => {
            setTitleText("Hi! I am Irba");
        }, 3000);
        setTimeout(() => {
            setTitleText("Hi! I am Irbaz");
        }, 3200);
        setTimeout(() => {
            setTitleText("Hi! I am Irbaz");
        }, 3400);
        setTimeout(() => {
            setTitleText("Hi! I am Irbaz");
        }, 3600);
    }, []);

    return (
        <div className="App">
            <SocialBar />
            <div className="Home" id="home">
                <NavBar scrollFunction={scrollToElement} />
                <NavMobile scrollFunction={scrollToElement} />
                <div className="homecon">
                    <div className="alltexts">
                        <div className="wintopcon">
                            <div className="closebtn"></div>
                            <div
                                className="closebtn"
                                style={{ backgroundColor: "#fabf2f" }}
                            ></div>
                            <div
                                className="closebtn"
                                style={{ backgroundColor: "#29cd3f" }}
                            ></div>
                        </div>
                        <p className="typewriter">
                            {titletext}
                            <span className="typewritercursor">|</span>
                        </p>
                        <p className="titledesc">
                            Computer Science Graduate
                        </p>
                        <p className="profession-desc">
                            Recent MSc graduate in Advanced Computer Science from University of Leicester with distinction. 
                            Passionate about building scalable cloud solutions and implementing robust security measures. 
                            Seeking opportunities to contribute expertise in <span className="highlight-text">Cloud Computing</span>, 
                            <span className="highlight-text">Cybersecurity</span>, and <span className="highlight-text">Full-Stack Development</span>.
                        </p>
                        <div className="experience-badge">
                            <span className="xp">3+ Months</span> Professional Experience | Cybersecurity Internship
                        </div>
                        <div className="mainbtncon">
                            <button
                                className="mainbtn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log("Contact Me button clicked!");
                                    scrollToElement("contact");
                                }}
                                style={{ pointerEvents: 'auto' }}
                            >
                                <img
                                    src={ContactIcon}
                                    alt="Contact"
                                    style={{ width: "1.3rem" }}
                                />
                                Contact Me
                            </button>
                            <button 
                                className="mainbtn" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log("Resume button clicked!");
                                    GoToResume();
                                }}
                                style={{ pointerEvents: 'auto' }}
                            >
                                <img
                                    src={ResumeIcon}
                                    alt="Resume"
                                    style={{ width: "1.3rem" }}
                                />
                                Resume
                            </button>
                        </div>
                    </div>
                    <div className="mainimg">
                        <img
                            src={ProgramIcon}
                            className="main-img"
                            alt="Programmer"
                        />
                    </div>
                </div>
                <SocialMobile />
            </div>
            <Skills />
            <Certificates />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
