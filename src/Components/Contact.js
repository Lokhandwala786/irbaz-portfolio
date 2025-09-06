import React from "react";
import Phone from "../Images/phone.png";
import Mail from "../Images/mail.png";

const Contact = () => {
    const openMail = () => {
        window.location.href = `mailto:${"irrujobs@gmail.com"}`;
    };

    const openPhone = () => {
        window.location.href = `tel:${"+44 07823707183"}`;
    };

    return (
        <div className="Contact" id="contact">
            <div>
                <p className="contacthead">Let's Talk!</p>
                <p className="subhead">Hit me up, let's make things happen!</p>
            </div>
            <div className="visitcon">
                <div className="visitcard">
                    <pre>
                        <p className="bracs">{"{"}</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <span className="jsonkeys">"name"</span> :{" "}
                            <span className="jsonvalues">"Irbaz Lokhandwala"</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <span className="jsonkeys">"email"</span> :{" "}
                            <span className="jsonvalues">
                                "irrujobs@gmail.com"
                            </span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <span className="jsonkeys">"phone"</span> :{" "}
                            <span className="jsonvalues">"+44 07823707183"</span>
                        </p>
                        <p className="bracs">{"}"}</p>
                    </pre>

                </div>
                <div className="contactelement">
                    <div className="phonecontact">
                        <img src={Phone} alt="Phone" className="contactimg" />
                        <p className="reachme">Contact me at</p>
                        <p className="reachme2">+44 07823707183</p>
                        <button className="call" onClick={openPhone}>
                            Call
                        </button>
                    </div>
                    <div className="phonecontact">
                        <img src={Mail} alt="Mail" className="contactimg" />
                        <p className="reachme">Mail me at</p>
                        <p className="reachme2">irrujobs@gmail.com</p>
                        <button className="call" onClick={openMail}>
                            Mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
