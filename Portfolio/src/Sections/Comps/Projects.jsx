import "../Comps Stylesheets/Projects.css"
import img from "../Comps/img.png"

function Projects(props) {
    return (<div className={"project_container"} key={props.key}>
        <div className={"project_left"}>x
            <p className={"Featured_Project"}>Featured Project</p>
            <p className={"Project_Name"}>Book Desk</p>
            <div className={"Project_Description"}>Featuring a trailing mouse cursor and clever pop-ups, this landing
                page puts a modern twist on 90's web design to unveil the Timberwolves' 35th Anniversary Classic Edition
                Uniforms.
            </div>
            <div className={"Project_tech"}>
                <a>Nextjs</a>
                <a>Nextjs</a>
                <a>Nextjs</a>
            </div>
            <div className="project-links"><a className={"Project_svgs"} href="" aria-label="GitHub Link"
                                              rel="noopener noreferrer" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                    <title>GitHub</title>
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a><a href="" aria-label="Live site" className="external Project_svgs"
                   rel="noopener noreferrer" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-external-link"><title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a></div>
        </div>

        <div className={"project_right"}>
            <a href={"https://www.google.com"} target={"_blank"}>
                <img src={img}></img></a>
        </div>

    </div>)
}

export default Projects