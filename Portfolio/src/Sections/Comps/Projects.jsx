import "../Comps Stylesheets/Projects.css"


import GestureLockImage from "../../assets/Public/Images/GestureLock.png"
import ResumeBuilderImage from "../../assets/Public/Images/ResumeBuilder.png"
import WeatherCastImage from "../../assets/Public/Images/WeatherCast.png"

function Projects(props) {

    const Project_list=[{
        Project_name:"Web Application for Gesture Based Digit Detection",
        Project_Description:"Developed GestureLock , employing Google's MediaPipe library for precise hand gesture recognition, with a specific emphasis on recognizing digits 1 to 5. The application introduces gesture-based authentication and CAPTCHA using hand landmarks. ",
        Project_TechList:["Javascript","MediaPipe","HTML","CSS"],
        Project_image:GestureLockImage,
        Project_link_Github:"https://github.com/RahulKrishna-A/GestureAIlock-MachineLearning_Powered_Hand_Gesture_Password_Detection",
        Project_link_live:"https://rahulkrishna-a.github.io/GestureAIlock-MachineLearning_Powered_Hand_Gesture_Password_Detection/"
    },{
        Project_name:"Resume Builder",
        Project_Description:"Constructed a Resume Generator application using ReactJS and CSS to facilitate the seamless creation of professional resume. Implemented a user-friendly interface that empowers users to effortlessly generate and download resumes in PDF format. ",
        Project_TechList:["ReactJs","CSS"],
        Project_image:ResumeBuilderImage,
        Project_link_Github:"https://github.com/RahulKrishna-A/ResumeBuilder",
        Project_link_live:"https://resume-builder-rahul.netlify.app/"
    },
        {
            Project_name:"Real-time Weather Application",
            Project_Description:"\n" +
                "Developed weatherCast, a web application which fetches real-time weather data from WeatherAPI, a robust weather data API. Designed a responsive user interface for WeatherCast and incorporated a feature that presents detailed historical weather information for the past five days in the user's selected location. ",
            Project_TechList:["JavaScript","API","HTML","CSS"],
            Project_image:WeatherCastImage,
            Project_link_Github:"https://github.com/RahulKrishna-A/WeatherCast",
            Project_link_live:"https://rahulkrishna-a.github.io/WeatherCast/"
        },
    ]

    return (<>
        {Project_list.map((items)=>{
            return (<div key={items.Project_name} className={"project_container"}>
                <div className={"project_left"}>
                    <p className={"Featured_Project"}>Item</p>
                    <p className={"Project_Name"}>{items.Project_name}</p>
                    <div className={"Project_Description"}>{items.Project_Description}
                    </div>
                    <div className={"Project_tech"}>
                        {items.Project_TechList.map((ele)=> {
                            return (<a key={2}>{ele}</a>)
                        })}
                    </div>
                    <div className="project-links"><a className={"Project_svgs"} href={items.Project_link_Github} aria-label="GitHub Link"
                                                      rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-github">
                            <title>GitHub</title>
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a><a href={items.Project_link_live} aria-label="Live site" className="external Project_svgs"
                           rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-external-link"><title>External Link</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a></div>
                </div>

                <div className={"project_right"}>
                    <a href={items.Project_link_live} target={"_blank"}>
                        <img alt={"ProjectImage"} src={items.Project_image}></img></a>
                </div>

            </div>)
        })}
    </>)
}

export default Projects