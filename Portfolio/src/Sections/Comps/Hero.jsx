import {motion} from "framer-motion";
import "../Comps Stylesheets/Hero.css"

function Hero() {

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
                delayChildren: 1

            },
        },
    }
    const child = {
        hidden: {
            opacity: 0,
            y: 10
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {ease: 'anticipate', duration: 0.4},
        },
    }
    return (
        <div id={"Hero_container"}>
            <motion.div className={"Hero"} variants={motionContainer} initial='hidden'
                        animate='show'>
                <motion.div className={"Hero_intro"} variants={child}> Hi! my name is</motion.div>
                <motion.div className={"Hero_Name"} variants={child}> Rahul Krishna.</motion.div>
                <motion.div className={"Hero_slogan"} variants={child}> I Explore, Code & Create.</motion.div>
                <motion.div className={"Hero_description"} variants={child}><p style={{marginBottom: "1rem"}}>An
                    aspiring software
                    developer with a goal-driven mindset and passion for learning and innovating.</p>
                    <p> I am always open to discussions on <a href={"https://www.linkedin.com/in/rahul-krishnaa28/"}
                                                              target={"_blank"} style={{
                        color: "var(--green)",
                        textDecoration: "None",
                    }}>Linkedin.</a></p>
                </motion.div>
                <motion.button style={{marginLeft: 0, marginTop: "1.5rem",}} variants={child} className={"mail_button"}>
                    <a style={{textDecoration: "None"}} href={"mailto:rahulkrish321123@gmail.com"}>Mail me!</a>
                </motion.button>
            </motion.div>


        </div>
    )
}


export default Hero