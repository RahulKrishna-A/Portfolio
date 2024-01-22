import React from 'react';
import './Global.css';
import Home from "./Sections/Home.jsx";
import About from "./Sections/About.jsx";
import Work from "./Sections/Work.jsx";
import Contact from "./Sections/Contact.jsx";
function App() {
    return (
        <div >
            <Home/>
            <About/>
            <Work/>
            <Contact/>


        </div>
    );
}

export default App;
