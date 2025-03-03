import Child4 from "./child4"
function Child3(props){
    let {course} = props
    return(
        
        <>
        <h1>My course is {course}</h1>
        {/* < Child4 city="Bhopal"/> */}
        <Child4 fullname={props.lname} city="Bhopal"/>
        {/* <h1>{props.lname}</h1> */}
        
        </>
    )
}
export default Child3