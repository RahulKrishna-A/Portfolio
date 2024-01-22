import "../Comps Stylesheets/About_left.css"

import {motion} from "framer-motion";

const motionContainer = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            staggerChildren: 0.15,
            duration: 0.3,


        },
    },
}
const child = {
    hidden: {opacity: 0,
        y:10},
    show: {
        opacity: 1,
        y:0,
        transition: {ease: 'anticipate', duration: 0.4},
    },
}
function About_left(){
    return(
        <motion.div variants={motionContainer} initial={"hidden"} whileInView={"show"}  viewport={{ once: true, amount: 0.8 }} id={"About_left_container"}>
            <motion.div variants={child} className={"About_header"}>
                <p>02.
                </p>
                <p>About Me</p>
                <div className={"line_horizontal"}></div>
            </motion.div>
            <motion.div variants={child} className={"About_description"}>
                <p>Hello! My name is Rahul and I enjoy creating things for the web. My interest in coding started back in
                    2020 during first year of B.tech . Since then, I started learning programming languages & solving
                    problems.</p>
                <p>During my tenure as a<a className={"green-color"}> Frontend Developer Intern</a> at <a
                    target={"_blank"} href={'https://www.ebonow.com/'} className={"green-color"}
                    style={{textDecoration: "underline"}}> EBO </a>, I led the development of responsive webpages,
                    showcasing a strong command of front-end technologies. </p>
                <p>Today, I'm currently pursuing my Bachelors in Electronics and Communication Engineering (2020-2024) with <a
                    className={"green-color"}>8.05 GPA</a> aggregate at <a href="https://www.amrita.edu/ "
                                                                           target={"_blank"} className={"green-color"}>Amrita
                    university.</a></p>

                <p>Here is a list of the
                    technologies that I'm familiar with!</p>
            </motion.div>
            <motion.ul variants={child} className={"About_skills"}>
                <li className={"About_skills_li"}>JavaScript</li>
                <li className={"About_skills_li"}>Python</li>
                <li className={"About_skills_li"}>ReactJS</li>
                <li className={"About_skills_li"}>HTML || CSS</li>
                <li className={"About_skills_li"}>NodeJS </li>
                <li className={"About_skills_li"}>ExpressJS</li>
                <li className={"About_skills_li"}>SQL</li>
                <li className={"About_skills_li"}>MongoDB</li>
                <li className={"About_skills_li"}>Tools(JWTs, Git, Framer Motion)</li>

            </motion.ul>
        </motion.div>
    )
}

export default About_left