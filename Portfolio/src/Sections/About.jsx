import "./Section StyleSheets/About.css"
import About_left from "./Comps/About_left.jsx";


function About() {
    return (
        <div id={"About_container"} className={"Section_Container Whole_app"}>
            <div id={"About_wrapper"}>
                <About_left/>
            </div>
        </div>
    )
}

export default About