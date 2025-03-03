import Child3 from "./child3"
function Child2(props) {
    let {fname}=props
    return(
        <>
        <h1>My last name is {fname}</h1>
        <Child3 course="FSD"/>
        <Child3 lname={props.fname}/>
        </>
    )
    
}
export default Child2