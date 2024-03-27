import "./Section StyleSheets/About.css"
import About_left from "./Comps/About_left.jsx";
import Infinite_box from "./Comps/infinite_scroller_box.jsx";

import CSS from "../assets/Logos/CSS.png"
import Git from "../assets/Logos/Git.png"
import Github from "../assets/Logos/github.png"
import HTML from "../assets/Logos/HTML.png"
import Jest from "../assets/Logos/Jest.png"
import JS from "../assets/Logos/JS.png"
import MUI from "../assets/Logos/Material UI.png"
import Mongo from "../assets/Logos/Mongo.png"
import Mysql from "../assets/Logos/mySql.png"
import nextjs from "../assets/Logos/Next.png"
import Node from "../assets/Logos/Node.png"
import openCV from "../assets/Logos/openCV.png"
import python from "../assets/Logos/Python.png"
import reactjs from "../assets/Logos/React.png"
import Recoil from "../assets/Logos/Recoil.png"
import Tailwindcss from "../assets/Logos/Tailwind.png"
import trello from "../assets/Logos/trello.png"
import zod from "../assets/Logos/zod.png"

// import JS from


const slider_data = [ {name:"Git", logo:Git}, {name:"Github", logo:Github}, {name:"Jest", logo:Jest}, {name:"JavaScript", logo:JS},
    {name:"MUI", logo:MUI},{name:"MongoDB",logo:Mongo},{name:"MySQL",logo:Mysql},{name:"NextJS",logo:nextjs},{name:"NodeJS",logo:Node},
    {name:"openCV",logo:openCV},{name:"Python",logo:python},{name:"ReactJS",logo:reactjs},{name:"Recoil",logo:Recoil},{name:"Tailwindcss",logo:Tailwindcss},
    {name:"trello",logo:trello},{name:"Zod",logo:zod}]


function About() {
    return (
        <div id={"About_container"} className={"Section_Container Whole_app"}>
            <div id={"About_wrapper"}>
                <About_left/>
            </div>
            <div id={"about_infinite-scroll"}>
                <div className={"slider "}>
                    {slider_data.map((data, i) => {
                        return (<Infinite_box key={i} name={data.name} logo={data.logo}/>)

                    })}
                </div>
                <div className={"slider "}>
                    {slider_data.map((data, i) => {
                        return (<Infinite_box key={100+i} name={data.name} logo={data.logo}/>)

                    })}
                </div>

            </div>
        </div>
    )
}

export default About