import React from "react";
import AWSCert from "../Images/aws-certificate.png";
import YHillsCert from "../Images/yhills-certificate.png";
import QueryCert from "../Images/query-certificate.png";
import LinuxCert from "../Images/linux-certificate.png";
import OSCert from "../Images/operating-certificate.png";
import CyberCert from "../Images/cybersecurity-certificate.png";

const Certificates = () => {
    const GoToCerti = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div className="certicon" id="certificate">
            <h5>Certificates</h5>
            <h1> </h1>
            <div className="certirow">
                <div className="certidiv1" onClick={() => GoToCerti("https://drive.google.com/file/d/1K9yBHoqGsr6o4Pk2sVocIEy3hOay4EBk/view?usp=sharing")}>
                    <img 
                        src={AWSCert} 
                        alt="AWS Certificate" 
                        className="certificate-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">AWS</p>
                            <span className="certititle">
                                Introduction to Cloud computing
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">16 Mar 2024</span>
                        </div>
                    </div>
                </div>
                <div className="certidiv2" onClick={() => GoToCerti("https://drive.google.com/file/d/1Vzzk7Hupd8LZQcSxizlq3ix5_BZHqWYd/view?usp=sharing")}>
                    <img 
                        src={YHillsCert} 
                        alt="YHills Certificate" 
                        className="certificate-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">YHills</p>
                            <span className="certititle">
                                CyberSecurity Internship completion
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">31 Mar 2024</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certirow side">
                <div className="certidiv3" onClick={() => GoToCerti("https://drive.google.com/file/d/1N5UPl8AUUQSbtxZkgxzQjrwq83nvg3_Y/view?usp=sharing")}>
                    <img 
                        src={QueryCert} 
                        alt="IBM Querying DB Certificate" 
                        className="certificate-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">IBM</p>
                            <span className="certititle">
                                Practical Introduction to querying DB
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">08 Dec 2022</span>
                        </div>
                    </div>
                </div>
                <div className="certidiv4" onClick={() => GoToCerti("https://drive.google.com/file/d/1M7rKSY9KS94nLs9qVMBAkUfKxxa1tezg/view?usp=sharing")}>
                    <img 
                        src={LinuxCert} 
                        alt="IBM Linux Certificate" 
                        className="certificate-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">IBM</p>
                            <span className="certititle">
                                Introduction to Linux commands and shell scripting
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">27 Jun 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="certirow side">
                <div className="certidiv5" onClick={() => GoToCerti("https://drive.google.com/file/d/18GROkhZGXNdi6IwUGmJQWHZdgpT5ttAM/view?usp=sharing")}>
                    <img 
                        src={OSCert} 
                        alt="Akamai OS Certificate" 
                        className="certificate-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">Akamai</p>
                            <span className="certititle">
                                Operating Systems Fundamentals
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">18 Sept 2023</span>
                        </div>
                    </div>
                </div>
                <div className="certidiv6" onClick={() => GoToCerti("https://drive.google.com/file/d/1qxoRUh4qV3c_NpR5XagavBtF9KPczQlH/view?usp=sharing")}>
                    <img 
                        src={CyberCert} 
                        alt="CISCO Cybersecurity Certificate" 
                        className="certificate-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="certidetails">
                        <div className="notthis">
                            <p className="certicom">CISCO Networking Academy</p>
                            <span className="certititle">
                                Introduction to Cyber security
                            </span>
                        </div>
                        <div className="veridiv">
                            <span className="certidate">09 Jun 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;