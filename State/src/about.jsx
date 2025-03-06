import { useState } from "react"

function About(){
    let[ar,setAr]=useState({
        name:"Ayush",contact:12345
    })
    let[arr,setArr]=useState(["Ayush","Shrivastava","FSD",877064450,25])
    let [color,setColor]=useState("")

    function fun(){
        setAr({name:"Anuj",contact:7889})
    }

    function light(){
        setColor('lightblue')
    }
    function dark(){
        setColor('darkblue')
    }
return(
    <>
    <div style={{backgroundColor:color}}>
    <h1>About {ar.name} {ar.contact}</h1>
    <button onClick={fun}>Change object</button>
    <h1>{arr[0]} </h1>
    <h1>{arr[1]} </h1>
    <h1>{arr[2]} </h1>
    <h1>{arr[3]} </h1>
    <h1>{arr[4]} </h1>
    <button onClick={light}>light</button>
    <button onClick={dark}>dark</button>
    <h1>Happy birthday</h1>
    <button >hide</button>
    <button>Show</button>
    </div>
    </>

)
}
export default About