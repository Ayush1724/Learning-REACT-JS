import { createContext } from "react"
import Child4 from "./child4"

let dataa=createContext()
let lname="Shrivastava"

function Child3(){
    return(
        <>
<h1>Child 3 is here</h1>
<dataa.Provider value={lname}>
    <Child4/>
</dataa.Provider>
        </>
    )
}
export default Child3
export {dataa}