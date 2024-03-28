import React from 'react';
import './Global.css';
import Home from "./Sections/Home.jsx";
import About from "./Sections/About.jsx";
import Work from "./Sections/Work.jsx";
import Contact from "./Sections/Contact.jsx";
import Credits from "./Sections/Credits.jsx";
function App() {
    return (
        <div  style={{overflowX:"hidden"}}>
            <Home/>
            <About/>
            <Work/>
            <Contact/>
            <Credits/>


        </div>
    );
}

export default App;
