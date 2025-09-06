import React from "react";

function Skills() {
    return (
        <div className="Skills" id="skills">
            <div className="Skillcon">
                <h5>Skills</h5>
                <div className="skillrow">
                    <div className="skillcard box">
                        <p className="skillname">Programming Languages</p>
                        <p className="skilldesc">Java (OOPs), PL/SQL, Python, C, PHP, Groovy Language</p>
                    </div>
                    <div className="skillcard box">
                        <p className="skillname">Web Development</p>
                        <p className="skilldesc">HTML, UI/UX, CSS, JavaScript, jQuery, XML, JSON</p>
                    </div>
                    <div className="skillcard box">
                        <p className="skillname">Software Development</p>
                        <p className="skilldesc">Structured and Object-Oriented Analysis and Design, Software Engineering, Quality Assurance, Agile Methodology, Software Testing</p>
                    </div>
                </div>
                <div className="skillrow">
                    <div className="skillcard box">
                        <p className="skillname">Frameworks</p>
                        <p className="skilldesc">Laravel, Django</p>
                    </div>
                    <div className="skillcard box">
                        <p className="skillname">Data Science</p>
                        <p className="skilldesc">Data Structures, Data Warehouse and Mining, Data Visualization, Virtualization</p>
                    </div>
                    <div className="skillcard box">
                        <p className="skillname">Cloud</p>
                        <p className="skilldesc">Cloud Computing, AWS, Networking Protocol, Operating System, Cloud Automation, Distributed System, Agile Project Management, Azure, Server Management</p>
                    </div>
                </div>
                <div className="skillrow">
                    <div className="skillcard box">
                        <p className="skillname">Other Skills</p>
                        <p className="skilldesc">Mobile Computing, Technical Writing, Research Methodology, Communication Skills, Stock Trading, Innovation Strategies, Enthusiasm, Problem Solving, Collaborative</p>
                    </div>
                    <div className="skillcard box">
                        <p className="skillname">Interests</p>
                        <p className="skilldesc">Finance, Tech and Business, Exploring, Board Games</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
