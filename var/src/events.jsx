const Event=()=>{
    function fun(){
alert("on Click")
    }
    function fun1(){
        alert("On Double click")
    }
    function fun2(){
        alert("On mouse enter")
    }
    return(
<>
<button onClick={fun}>Click</button>
<button onDoubleClick={fun1}>on Double Click</button>
<button onMouseEnter={fun2}>On Mouse Enter</button>
</>

    )
}
export default Event