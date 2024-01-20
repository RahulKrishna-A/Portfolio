import {motion} from 'framer-motion'
import "../Comps Stylesheets/Nav.css"
import {useState} from "react";


function Nav(props) {

    const [hamburgerOn, sethamburgerOn] = useState(false)

    function OnclickHamburger() {
        sethamburgerOn((prev) => {
            return !prev
        })
    }

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
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {ease: 'anticipate', duration: 0.4},
        },
    }


    return (
        <div id={"nav-bar"}>
            <div id={"nav-bar_left"}>
                R
            </div>
            <div id={"nav-bar_right"}></div>

            {props.hamburgerMenu && <motion.ul
                id={"nav-bar_right"}
                variants={motionContainer}
                initial='hidden'
                animate='show'
            >

                <motion.li className={"nav-list_items"} variants={child}><a className={"nav-list_items__p one"}>Home</a>
                </motion.li>
                <motion.li className={"nav-list_items"} variants={child}><a
                    className={"nav-list_items__p two"}>About</a></motion.li>
                <motion.li className={"nav-list_items"} variants={child}><a
                    className={"nav-list_items__p three"}>Work</a></motion.li>
                <motion.li className={"nav-list_items"} variants={child}><a
                    className={"nav-list_items__p four"}>Contact</a></motion.li>
                <motion.button variants={child} className={"Resume_button"}>Resume</motion.button>

            </motion.ul>}
            <div id={"nav_right_hamburger"} style={{position: "relative"}}>
                <input onClick={OnclickHamburger} hidden="1" className="check-icon" id="check-icon" name="check-icon"
                       type="checkbox"/>
                <label className="icon-menu" htmlFor="check-icon">
                    <div className="bar bar--1"></div>
                    <div className="bar bar--2"></div>
                    <div className="bar bar--3"></div>
                </label>

            </div>

        </div>
    )
}

export default Nav