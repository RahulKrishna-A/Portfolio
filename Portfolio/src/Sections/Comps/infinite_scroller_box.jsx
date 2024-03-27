// import Reactsv from "../../assets/Logos/"

export default function Infinite_box(props){

    return (
        <span className={"infinite_divs"} style={{display:"flex",justifyContent:"center", padding:"12px 25px",alignItems:"center",gap:"5px",width:"max-content", borderRadius:"10px" }}>
            <img style={{height:"20px",width:"20px",}} src={props.logo}/>
            <a style={{fontSize:"0.9rem",fontFamily: "var(--font-mono)"}}>{props.name}</a>
        </span>
    )
}