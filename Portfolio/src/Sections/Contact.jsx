import "./Section StyleSheets/Contact.css"

function Contact() {
    return (<div id={"Contact_container"}>
        <p className={"Contact_title"}>04. What's next</p>
        <p className={"Contact_Desc"}>Get In Touch</p>
        <div className={"Contact_content"}><p>I'm currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hello, I will provide a swift response! Feel free to mail me
            about any relevant job updates.</p></div>
        <button className={"Resume_button _button"}><a id={"contact_button"} style={{textDecoration: "None"}}
                                                       href={"mailto:rahulkrish321123@gmail.com"}>Mail me!</a></button>
    </div>)
}

export default Contact