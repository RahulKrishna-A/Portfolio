import "./Section StyleSheets/Work.css"
import {motion} from "framer-motion";
import Projects from "./Comps/Projects.jsx";


function Work(){
    return(<div id={"Work_container"} className={"Whole_app"}>
        <div id={"Work_wrapper"}>
            <div className={"Work_header"}>
                <p>02.
                </p>
                <p>Things I've Built</p>
                <div className={"line_horizontal"}></div>
            </div>
            <Projects/>
        </div>
    </div>)

}

export default Work