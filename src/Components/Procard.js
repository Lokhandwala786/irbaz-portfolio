import React from "react";
import LinkIcon from "../Images/link.png";

const Procard = (props) => {
    const GoToGit = (link) => {
        window.location.href = link;
    };

    const GoToLinkedin = (link) => {
        window.location.href = link;
    };

    return (
        <div className="cardparent">
            <div className="card3dcon">
                <div className="frontcard">
                    <p className="proname">{props.title}</p>
                    <p className="prodate">{props.date}</p>
                    <p className="prodesc">{props.frontdesc}</p>
                    <div className="tagscon">
                        {props.tags.map((tag, index) => (
                            <div className="tags" key={index}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="backcard">
                    <p className="prodesc">{props.backdesc}</p>
                    <div className="tagscon">
                        {props.git && (
                            <button
                                className="links"
                                onClick={() => GoToGit(props.git)}
                            >
                                Github{" "}
                                <img
                                    src={LinkIcon}
                                    className="linkimg"
                                    alt="Github"
                                />
                            </button>
                        )}

                        {props.live && (
                            <button
                                className="links"
                                onClick={() => GoToLinkedin(props.live)}
                            >
                                Live{" "}
                                <img
                                    src={LinkIcon}
                                    className="linkimg"
                                    alt="Link"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Procard;
