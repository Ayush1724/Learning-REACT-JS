import { dataa } from "./child3"

function Child5(){
    return(
        <>
<h1>Child5 is here</h1>
<dataa.Consumer>
    {
        (a)=>{return <h1>{a}</h1>}
    }
</dataa.Consumer>
        </>
    )
}
export default Child5