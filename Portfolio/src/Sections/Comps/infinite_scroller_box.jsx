// import Reactsv from "../../assets/Logos/"

export default function Infinite_box(props){

    return (
        <span style={{display:"flex",justifyContent:"center", padding:"12px 25px",alignItems:"center",gap:"5px",border:"1px solid rgba(255, 255, 255, 0.82) ",color: "var(--green)",width:"max-content", borderRadius:"10px" }}>
            <img style={{height:"20px",width:"20px",}} src={props.logo}/>
            <a style={{fontSize:"1.2rem",fontFamily: "var(--font-mono)"}}>{props.name}</a>
        </span>
    )
}