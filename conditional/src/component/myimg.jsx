import { useState } from "react"
import p1 from "/p1.jpg"
import p2 from "/p2.jpg"
import p3 from "/p3.jpg"
import p4 from "/p4.jpg"
import p5 from "/p5.jpg"
function Myimg(){
    let[ig,setIg]=useState(p1)
    return(
        <>
        <img src= {p1} alt="" width="200px" onMouseEnter={()=>setIg(p1)} />
        <img src= {p2} alt="" width="200px" onMouseEnter={()=>setIg(p2)}/>
        <img src={p3} alt="" width="200px" onMouseEnter={()=>setIg(p3)}/>
        <img src={p4} alt="" width="200px" onMouseEnter={()=>setIg(p4)}/>
        <img src={p5} alt="" width="200px" onMouseEnter={()=>setIg(p5)}/>
        <br /><br />
        <img src={ig} alt="" height="200px" />
        </>
    )
}
export default Myimg