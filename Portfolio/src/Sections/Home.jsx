import "./Section StyleSheets/Home.css"
import Nav from "./Comps/Nav.jsx";
import React, { useState, useEffect } from 'react';
import {color} from "framer-motion";
import Feature_sides_left from "./Comps/Feature_sides_left.jsx";
import Feature_sides_Right from "./Comps/Feature_sides_Right.jsx";


function Home(){

        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => {
                const newWidth = window.innerWidth;
                setWindowWidth(newWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []); // Empty dependency array to only run the effect once on component mount

    return(
        <div className={"Section_Container Whole_app"}>
            <Nav hamburgerMenu={windowWidth>=800}/>
            {windowWidth>=800 && <Feature_sides_left appears={windowWidth>=800}/>}
            {windowWidth>=800 && <Feature_sides_Right />}

        </div>
    )
}

export default Home