import "./Section StyleSheets/Experience.css"
import {motion} from "framer-motion";
import Projects from "./Comps/Projects.jsx";


function Experience() {
    return (<div id={"Experience_container"} className={"Whole_app"}>
        <div id={"Work_wrapper"}>
            <div className={"Work_header"}>
                <p>03.
                </p>
                <p>Where I've Worked</p>
                <div className={"line_horizontal"}></div>
            </div>
            <div className={"p-6"}>
                <div className={""}>
                    <p className={"role_name"}> SDE Intern</p>
                    <a className={"Project_Name"}>Klaimz(Stealth Startup)</a><a style={{
                    color: "white", marginLeft: "1rem", fontSize: "clamp(12px, 5vw, 16px)",
                    fontFamily: "var(--font-sans)"
                }}>Feb 2024 - Present</a>
                    <div style={{marginLeft: 6, marginTop: 16}}>
                        <ul>
                            <li className={"Experience_points"}>
                                Made major contributions in MVP development using Next.js, Framer motion, Tailwind CSS.
                            </li>
                            <li className={"Experience_points"}>
                                Accountable for over 40 % of the Frontend code base, Implemented functionalities - API
                                integrations, session
                                managements, dynamic data manipulation for graphs.
                            </li>
                            <li className={"Experience_points"}> Utilized Agile methodologies (Trello, git) for
                                collaboration, developed role-based features, protected routes and
                                authentications.
                            </li>
                            <li className={"Experience_points"}> Proficient in Axios for API integration, bulk file data
                                extraction, and translating user-sensitive data into graphical
                                representations
                            </li>
                        </ul>

                    </div>
                </div>
                <div style={{marginTop:"40px"}}>
                    <p className={"role_name"}> Frontend Developer Intern</p>
                    <a className={"Project_Name"}>EBO</a><a style={{
                    color: "white", marginLeft: "1rem", fontSize: "clamp(12px, 5vw, 16px)",
                    fontFamily: "var(--font-sans)"
                }}>March 2023 - April 2023</a>
                    <div style={{marginLeft: 6, marginTop: 16}}>
                        <ul>
                            <li className={"Experience_points"}>
                                Developed fully responsive and pixel-perfect front-end web pages for the organisation’s website utilizing HTML5,
                                CSS3, and JavaScript
                            </li>
                            <li className={"Experience_points"}>
                                Made features such as drop-down navigation menu, and interactive content cards enhancing user experience.
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>)

}

export default Experience