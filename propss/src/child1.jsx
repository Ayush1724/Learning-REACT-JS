import Child2 from "./child2"
function Child1(props){
    return(
        <>
        <h1>My name is {props.name}</h1>
        <Child2 fname="Shrivastava"/> 
               </>
    )
}
export default Child1