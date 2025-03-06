import { useState } from "react"

function Neww(){
    let[st,setSt]=useState(true)
    let[num,setNum]=useState(0)
    function decrement(){
        if(num!=0){
            setNum(num-1)
        }
    }
    return(
        <>
        {st ? <h1>Welcome</h1> : ""}
        <button onClick={()=>setSt(false)}>hide</button>
        <button onClick={()=>setSt(true)}>show</button>
        <button onClick={()=>setSt(!st)}>{st ? "hide":"Show"}</button><br />
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}
export default Neww